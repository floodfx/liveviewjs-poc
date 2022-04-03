import { html, LiveViewTemplate, live_title_tag, PageTitleDefaults } from "liveviewjs";

export function rootTemplateRenderer(
  pageTitleDefault: PageTitleDefaults,
  csrfToken: string,
  innerContent: LiveViewTemplate
): LiveViewTemplate {
  const pageTitle = pageTitleDefault?.title ?? "";
  const pageTitlePrefix = pageTitleDefault?.prefix ?? "";
  const pageTitleSuffix = pageTitleDefault?.suffix ?? "";
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="${csrfToken}" />
        ${live_title_tag(pageTitle, { prefix: pageTitlePrefix, suffix: pageTitleSuffix })}
        <script defer type="text/javascript" src="/liveview.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css" />
      </head>

      <body>
        ${innerContent}
      </body>
    </html>
  `;
}