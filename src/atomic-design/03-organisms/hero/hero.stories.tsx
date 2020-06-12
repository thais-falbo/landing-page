import React from "react";
import { action } from "@storybook/addon-actions";
import Hero from "./";
import Capsule from "../../../assets/images/capsule.jpg";

export default {
  title: "Organisms|Hero",
  component: Hero,
};

const text =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor.";

const trends = Array(3).fill(text) as [string, string, string];

export const Default = () => (
  <Hero
    image={{ src: Capsule, alt: "Capsule" }}
    cta={{
      headingText: "Capsule",
      paragraphText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie elit at lacus",
      button: { text: "Click", onClick: action("Click") },
    }}
    trends={trends}
  />
);
