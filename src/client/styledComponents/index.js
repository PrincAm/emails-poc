import React from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import inlineCss from "inline-css";
import ReactDOMServer from "react-dom/server";

import Template from "./Template";
import Html from "./Html";

export const renderTemplateSc = async (req) => {
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToStaticMarkup(
    <StyleSheetManager sheet={sheet.instance}>
      <Template name={req.body.name} />
    </StyleSheetManager>
  );
  const styles = sheet.getStyleTags();
  const title = "Server side Rendering with Styled Components";

  return await inlineCss(
    Html({
      body,
      styles,
      title,
    }),
    {
      url: "empty",
    }
  );
};
