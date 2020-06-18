import React from "react";
import { text, color, select } from "@storybook/addon-knobs";
import Icon from ".";
import Theme from "../../../utils/styled/theme";

export default {
  title: "Atoms|Icon",
  component: Icon,
};

export const Dot = () => (
  <Icon.Dot
    width={text("Width", "5rem")}
    height={text("Height", "5rem")}
    color={color("Color", Theme.colors.primary)}
  />
);

export const Logo = () => (
  <Icon.Logo
    width={text("Width", "5rem")}
    height={text("Height", "5rem")}
    color={color("Color", Theme.colors.primary)}
  />
);

export const Arrow = () => (
  <Icon.Arrow
    width={text("Width", "3rem")}
    height={text("Height", "3rem")}
    color={color("Color", Theme.colors.primary)}
    direction={select("Direction", ["left", "right"], "left")}
  />
);
