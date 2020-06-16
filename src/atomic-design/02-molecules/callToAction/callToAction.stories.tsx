import React from "react";
import { text, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import CallToAction from "./";
import Theme from "../../../utils/styled/theme";

export default {
  title: "Molecules|Call To Action",
  component: CallToAction,
};

export const Default = () => (
  <CallToAction
    color={color("Text Color", Theme.colors.darkBlue)}
    headingText={text("Heading", "Lorem")}
    paragraphText={text("Paragraph", "Ipsum sit dolor amet")}
    button={{ text: text("Button", "Click"), onClick: action("Click") }}
  />
);
