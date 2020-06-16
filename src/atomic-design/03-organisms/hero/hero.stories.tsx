import React from "react";
import { action } from "@storybook/addon-actions";
import Hero from "./";
import Capsule from "../../../assets/images/capsule.jpg";
import { color, array, text } from "@storybook/addon-knobs";

export default {
  title: "Organisms|Hero",
  component: Hero,
};

const textDefault =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor.";

const trends = Array(3).fill(textDefault) as [string, string, string];

export const Default = () => (
  <Hero
    image={{ src: Capsule, alt: "Capsule" }}
    cta={{
      headingText: text("Heading", "Capsule"),
      paragraphText: text("Paragraph", textDefault),
      button: { text: text("Button", "Click"), onClick: action("Click") },
      color: color("Color", "#fff"),
    }}
    trends={array("Trends", trends, "||") as [string, string, string]}
  />
);
