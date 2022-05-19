import React from "react";
import express from "express";
import bodyParser from "body-parser";

import { renderTemplateSc } from "./client/styledComponents";
import { renderTemplateMjml } from "./client/mjml";

const mailchimpClient = require("@mailchimp/mailchimp_transactional")(""); // TODO add API key

const port = 3000;
const server = express();
const jsonParser = bodyParser.json();

// http://localhost:3000/template
server.post("/template", jsonParser, async (req, res) => {
  const { useMjml } = req.body;
  const html = useMjml ? renderTemplateMjml(req) : await renderTemplateSc(req);

  const response = await mailchimpClient.messages.send({
    message: {
      html: html,
      subject: "Email service",
      from_email: "",
      to: [{ email: "" }],
    },
  });

  console.log(response);
  res.sendStatus(200);
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
