import {
  HttpLiveComponentSocket,
  LiveComponent,
  LiveComponentContext,
  LiveView,
  LiveViewContext,
  LiveViewTemplate,
} from "../component";
import { SessionData } from "../session";
import { HttpLiveViewSocket } from "../socket/live_socket";
import { html, safe } from "../templates";
import { PageTitleDefaults } from "../templates/helpers/page_title";

/**
 * Type that defines a function that returns a string ID used to identify a unique http request
 * and/or websocket connection.  Should generate unique IDs for each request and connection.  Good
 * concrete implementations are: nanoid, shortid, uuidv4 (though these are long).
 */
export type IdGenerator = () => string;

/**
 * Type that defines a function that returns a string value used for protecting requests against
 * Cross-site Request Forgery (CSRF) attacks.  Good concrete implementations are: crypto.randomBytes, uuidv4.
 */
export type CsrfGenerator = () => string;

/**
 * A class that knows how to serialize (Ser) and deserialize (De) session data.  This is used to pass
 * session data from the initial http request to the websocket connection.  You should use a strategy that
 * cannot be tampered with such as signed JWT tokens or other cryptographically safe serialization/deserializations.
 */
export interface SerDe {
  serialize<T>(data: T): Promise<string>;
  deserialize<T>(data: string): Promise<T>;
}

/**
 * An interface that represents how to extract required data from an HTTP server request (such as Express, Koa, etc in the
 * Node ecosystem or Oak on the Deno ecosystem) for handling a LiveView http request.
 */
export interface HttpRequestAdaptor {
  /**
   * Make available SessionData from the HTTP request
   */
  getSessionData: () => SessionData;
  /**
   * Extract request parameters (aka query string parameters) from the HTTP request.
   */
  getRequestParameters: () => { [key: string]: any };
  /**
   * Expose the HTTP request URL
   */
  getRequestUrl: () => string;
  /**
   * Expose the path of the HTTP request URL
   */
  getRequestPath: () => string;
  /**
   * Callback to the adaptor that a redirect should be perfermed with the given url
   */
  onRedirect: (toUrl: string) => void;
  /**
   * Make available the SerDe for serializing and deserializing session data.
   */
  getSerDe: () => SerDe;
}

/**
 * Use the given inputs to handle (e.g. generate the HTML) for the requested LiveView. Usually this
 * is called via HTTP server middleware that determines if a request is to a LiveView and if so,
 * creates and passes all of the required inputs to this function
 * @param idGenerator the @{IdGenerator} to use to generate unique IDs for the HTTP request and web socket connection
 * @param csrfGenerator the @{CsrfGenerator} to use to generate unique CSRF tokens to protect against CSRF attacks
 * @param liveView the @{LiveView} to render
 * @param adaptor the @{HttpRequestAdaptor} to use to extract required data from the HTTP request
 * @param rootTemplateRenderer the @{LiveViewTemplate} which this @{LiveView} is rendered within (typically reused across all LiveViews)
 * @param pageTitleDefaults optional @{PageTitleDefaults} to use to set the page title for the LiveView
 * @param liveViewTemplateRenderer optional @{LiveViewTemplate} used for adding additional content to the LiveView (typically reused across all LiveViews)
 * @returns the HTML for the HTTP server to return to the client
 */
export const handleHttpLiveView = async (
  idGenerator: IdGenerator,
  csrfGenerator: CsrfGenerator,
  liveView: LiveView<LiveViewContext, unknown>,
  adaptor: HttpRequestAdaptor,
  rootTemplateRenderer: (
    pageTitleDefault: PageTitleDefaults,
    csrfToken: string,
    content: LiveViewTemplate
  ) => LiveViewTemplate,
  pageTitleDefaults?: PageTitleDefaults,
  liveViewTemplateRenderer?: (session: SessionData, liveViewContent: LiveViewTemplate) => LiveViewTemplate
) => {
  const { getSessionData, getRequestParameters, getRequestUrl, onRedirect } = adaptor;
  // new LiveViewId for each request
  const liveViewId = idGenerator();

  // extract csrf token from session data or generate it if it doesn't exist
  const sessionData = getSessionData();
  if (sessionData._csrf_token === undefined) {
    sessionData._csrf_token = csrfGenerator();
  }

  // prepare a http socket for the `LiveView` render lifecycle: mount => handleParams => render
  const liveViewSocket = new HttpLiveViewSocket<LiveViewContext>(liveViewId);

  // execute the `LiveView`'s `mount` function, passing in the data from the HTTP request
  await liveView.mount({ _csrf_token: sessionData._csrf_token, _mounts: -1 }, { ...sessionData }, liveViewSocket);

  // check for redirects in `mount`
  if (liveViewSocket.redirect) {
    const { to } = liveViewSocket.redirect;
    onRedirect(to);
    return;
  }

  // execute the `LiveView`'s `handleParams` function, passing in the data from the HTTP request
  await liveView.handleParams(getRequestParameters(), getRequestUrl(), liveViewSocket);

  // check for redirects in `handleParams`
  if (liveViewSocket.redirect) {
    const { to } = liveViewSocket.redirect;
    onRedirect(to);
    return;
  }

  // now render the `LiveView` including running the lifecycle of any `LiveComponent`s it contains
  let myself = 1; // counter for live_component calls
  const view = await liveView.render(liveViewSocket.context, {
    csrfToken: sessionData.csrfToken,
    async live_component(
      liveComponent: LiveComponent<LiveComponentContext>,
      params?: Partial<LiveComponentContext & { id: string | number }>
    ): Promise<LiveViewTemplate> {
      // params may be empty
      params = params ?? {};
      delete params.id; // remove id before passing to socket

      // prepare a http socket for the `LiveComponent` render lifecycle: mount => update => render
      const lcSocket = new HttpLiveComponentSocket<LiveComponentContext>(
        liveViewId,
        params as unknown as LiveComponentContext
      );

      // pass params provided in `LiveView.render` to the `LiveComponent` socket
      lcSocket.assign(params);

      // start the `LiveComponent` lifecycle
      await liveComponent.mount(lcSocket);
      await liveComponent.update(lcSocket);

      // render view with context
      const newView = await liveComponent.render(lcSocket.context, { myself: myself });
      myself++;
      // return the view to the parent `LiveView` to be rendered
      return newView;
    },
  });

  // now that we've rendered the `LiveView` and its `LiveComponent`s, we can serialize the session data
  // to be passed into the websocket connection
  const serDe = adaptor.getSerDe();
  const serializedSession = await serDe.serialize({ ...sessionData });

  // TODO implement tracking of statics
  // const serializedStatics = serDe.serialize({ ...view.statics });
  const serializedStatics = "";

  // optionally render the `LiveView` inside another template passing the session data
  // and the rendered `LiveView` to the template renderer
  let liveViewContent = safe(view);
  if (liveViewTemplateRenderer) {
    liveViewContent = liveViewTemplateRenderer({ ...sessionData }, safe(view));
  }

  // wrap `LiveView` content inside the `phx-main` template along with the serialized
  // session data and the generated live view ID for the websocket connection
  const rootContent = html`
    <div
      data-phx-main="true"
      data-phx-session="${serializedSession}"
      data-phx-static="${serializedStatics}"
      id="phx-${liveViewId}">
      ${safe(liveViewContent)}
    </div>
  `;

  // finally render the `LiveView` root template passing any pageTitle data, the CSRF token,  and the rendered `LiveView`
  const rootView = rootTemplateRenderer(pageTitleDefaults ?? { title: "" }, sessionData._csrf_token, rootContent);
  return rootView.toString();
};
