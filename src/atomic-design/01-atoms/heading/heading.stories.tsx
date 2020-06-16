import React from "react";
import { number, boolean, text, select, color } from "@storybook/addon-knobs";
import Heading from "./";
import Theme from "../../../utils/styled/theme";
import { headingLevel } from "atomic-design-types";

export default {
  title: "Atoms|Heading",
  component: Heading,
};

export const Levels = () => (
  <>
    <Heading level={1} text="Heading 1" />
    <Heading level={2} text="Heading 2" />
    <Heading level={3} text="Heading 3" />
    <Heading level={4} text="Heading 4" />
  </>
);

export const Playground = () => (
  <Heading
    level={number("Level", 1, { min: 1, max: 4, step: 1 }) as headingLevel}
    text={text("Text", "My Heading")}
    uppercase={boolean("Uppercase", false)}
    weight={select("Weight", ["bold", "black"], "bold")}
    color={color("Color", Theme.colors.darkBlue)}
  />
);
