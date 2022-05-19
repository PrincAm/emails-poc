import { render } from "mjml-react";
import Template from "./Template";
import React from "react";

export const renderTemplateMjml = (req) => {
  const { html } = render(<Template name={req.body.name} />, {
    validationLevel: "soft",
    minify: true,
  });

  return html;
};
