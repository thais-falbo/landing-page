import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import Button from "./";

export default {
  title: "Atoms|Button",
  component: Button,
};

export const Playground = () => (
  <Button
    text={text("Text", "Click")}
    size={select("Size", ["small", "normal", "large"], "normal")}
    onClick={action("click")}
    disabled={boolean("Disabled", false)}
    type={select("Type", ["button", "submit", "reset"], "button")}
  />
);
