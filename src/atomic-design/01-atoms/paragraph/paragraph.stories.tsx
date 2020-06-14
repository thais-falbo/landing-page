import React from "react";
import { text, select, color } from "@storybook/addon-knobs";
import Paragraph from "./";
import Theme from "../../../utils/styled/theme";

export default {
  title: "Atoms|Paragraph",
  component: Paragraph,
};

const textDefault = `Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button. Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.`;

export const Playground = () => (
  <Paragraph
    text={text("Text", textDefault)}
    size={select("Size", ["small", "normal", "large"], "normal")}
    color={color("Color", Theme.colors.darkBlue)}
  />
);
