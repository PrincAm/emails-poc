import React from "react";
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlImage,
  MjmlStyle,
  MjmlText,
  MjmlFont,
} from "mjml-react";

import Header from "./Header";

const Template = ({ name }) => (
  <Mjml>
    <MjmlHead>
      <MjmlTitle>New email service</MjmlTitle>
      <MjmlPreview>This is testing email...</MjmlPreview>
      <MjmlFont
        name="Roboto"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <mj-include path="assets/mjml.css" type="css" />
      <MjmlStyle>{`
          .heading div {
              font-size: 24px !important;
              line-height: 32px !important;
              font-weight: 700;
          }
          .paragraph div {
              font-size: 16px !important;
              line-height: 24px !important;
          }
          .paragraphSecondary div {
              font-size: 14px !important;
              line-height: 24px !important;
          }
      `}</MjmlStyle>
    </MjmlHead>
    <MjmlBody width={640}>
      <MjmlSection fullWidth backgroundColor="#ffffff">
        <MjmlColumn>
          <Header />
          <MjmlText cssClass="heading">Welcome to SecurityScorecard</MjmlText>
          <MjmlText cssClass="paragraph">Hi {name}</MjmlText>
          <MjmlText cssClass="paragraph">
            Tricia Harlan <b>(tharlan@securityscorecard.io)</b> at
            SecurityScorecard is inviting you to download information about
            cybersecurity compliance milestones they have met.
          </MjmlText>
          <MjmlText cssClass="paragraph">
            You can access shared artifacts by logging into the{" "}
            <b>SecurityScorecard platform:</b>
          </MjmlText>
          <MjmlText cssClass="paragraphSecondary" align="center">
            <b>File:</b> SOC 2 Type 2 <br />
            <b>Expiration date:</b> March, 2022
          </MjmlText>
          <MjmlText cssClass="paragraph">
            In its mission to make the world a safer place, SecurityScorecard
            provides an industry-leading ratings platform for you to monitor
            your own cybersecurity and that of your partners and vendors.
          </MjmlText>
          <MjmlText cssClass="paragraph">
            <b>Learn more about SecurityScorecard.</b>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlImage
            align="center"
            src="https://s3.us-east-2.amazonaws.com/imarc-securityscorecard.com/prod/images/ssc-new-logo.png"
            width={184}
          />
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

export default Template;
