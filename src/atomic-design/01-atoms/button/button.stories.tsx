import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select, color } from "@storybook/addon-knobs";
import Button from "./";
import Theme from "../../../utils/styled/theme";

export default {
  title: "Atoms|Button",
  component: Button,
};

export const Example = () => (
  <Button
    text={text("Text", "Click")}
    size={select("Size", ["small", "normal", "large"], "normal")}
    onClick={action("click")}
    disabled={boolean("Disabled", false)}
    type={select("Type", ["button", "submit", "reset"], "button")}
    design={select("Design", ["default", "text"], "default")}
    color={color("Color", Theme.colors.primary)}
  />
);
