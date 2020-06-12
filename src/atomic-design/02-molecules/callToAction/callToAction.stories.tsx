import React from "react";
import { action } from "@storybook/addon-actions";
import CallToAction from "./";

export default {
  title: "Molecules|Call To Action",
  component: CallToAction,
};

export const Default = () => (
  <CallToAction
    headingText="Lorem"
    paragraphText="Ipsum sit dolor amet"
    button={{ text: "Click", onClick: action("Click") }}
  />
);
