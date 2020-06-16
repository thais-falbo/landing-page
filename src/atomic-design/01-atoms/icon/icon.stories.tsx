import React from "react";
import { text, color } from "@storybook/addon-knobs";
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
