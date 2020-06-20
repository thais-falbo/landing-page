import React from "react";
import Footer from ".";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Organisms|Footer",
  component: Footer,
};

export const Example = () => <Footer text={text("Text", "Footer text")} />;
