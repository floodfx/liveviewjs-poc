import type {
  LiveViewRouter,
  LiveViewTemplate,
  PageTitleDefaults,
  RequestAdaptor,
  SerDe,
  SessionData,
} from "./build/liveview.mjs";
import { handleHttpLiveView } from "./build/liveview.mjs";
import { DenoJwtSerDe } from "./serDe.ts";
import { Context, nanoid } from "./deps.ts";

export const configLiveViewHandler = (
  getRouter: () => LiveViewRouter,
  rootTemplateRenderer: (
    pageTitleDefault: PageTitleDefaults,
    csrfToken: string,
    content: LiveViewTemplate,
  ) => LiveViewTemplate,
  signingSecret: string,
  pageTitleDefaults?: PageTitleDefaults,
  liveViewTemplateRenderer?: (
    session: SessionData,
    liveViewContent: LiveViewTemplate,
  ) => LiveViewTemplate,
): ((
  ctx: Context<Record<string, any>, Record<string, any>>,
  next: () => Promise<unknown>,
) => Promise<void>) => {
  return async (
    ctx: Context<Record<string, any>, Record<string, any>>,
    next: () => Promise<unknown>,
  ) => {
    try {
      const adaptor = new DenoRequestAdaptor(ctx);
      const { getRequestPath } = adaptor;

      // look up component for route
      const liveview = getRouter()[getRequestPath()];
      if (!liveview) {
        // no component found for route so call next() to
        // let a possible downstream route handle the request
        await next();
        return;
      }

      const rootViewHtml = await handleHttpLiveView(
        nanoid,
        nanoid,
        liveview,
        adaptor,
        rootTemplateRenderer,
        signingSecret,
        pageTitleDefaults,
        liveViewTemplateRenderer,
      );

      // handle redirect
      if (adaptor.redirect) {
        ctx.response.redirect(adaptor.redirect);
        return;
      }

      // render html
      ctx.response.body = rootViewHtml ? rootViewHtml.toString() : "";
      ctx.response.type = "text/html";
      await next();
    } catch (error) {
      throw error;
    }
  };
};

class DenoRequestAdaptor implements RequestAdaptor {
  public redirect: string | undefined;
  private ctx: Context<Record<string, any>, Record<string, any>>;
  constructor(ctx: Context<Record<string, any>, Record<string, any>>) {
    this.ctx = ctx;
  }

  getSessionData = (): SessionData => {
    return this.ctx.state.session ?? {};
  };
  getRequestParameters = (): { [key: string]: any } => {
    return this.ctx.request.body;
  };
  getRequestUrl = (): string => {
    return this.ctx.request.url.toString();
  };
  getRequestPath = (): string => {
    return this.ctx.request.url.pathname;
  };
  onRedirect = (to: string) => {
    this.redirect = to;
  };
  getSerDe = (): SerDe => {
    return new DenoJwtSerDe();
  };
}