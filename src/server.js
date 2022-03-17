import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import bodyParser from "body-parser";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import inlineCss from "inline-css";

import App from "./client/App";
import Html from "./client/Html";

const mailchimpClient = require("@mailchimp/mailchimp_transactional")(""); // TODO add API key

const port = 3000;
const server = express();
const jsonParser = bodyParser.json();

// http://localhost:3000/template
server.post("/template", jsonParser, async (req, res) => {
  const sheet = new ServerStyleSheet();
  const body = ReactDOMServer.renderToStaticMarkup(
    <StyleSheetManager sheet={sheet.instance}>
      <App name={req.body.name} />
    </StyleSheetManager>
  );
  const styles = sheet.getStyleTags();
  const title = "Server side Rendering with Styled Components";

  const html = await inlineCss(
    Html({
      body,
      styles,
      title,
    }),
    {
      url: "empty",
    }
  );

  const response = await mailchimpClient.messages.send({
    message: {
      html: html,
      subject: "Email service",
      from_email: "", // TODO add email with verified domain
      to: [{ email: "" }], // TODO add email with verified domain
    },
  });

  console.log(response);
  res.sendStatus(200);
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
