import React from "react";
import Card from "./";
import Capsule from "../../../assets/images/capsule.jpg";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Molecules|Card",
  component: Card,
};

const headingEx = `My capsule`;
const paragraphEx = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus aliquet sapien.`;

export const Example = () => (
  <Card
    imageSrc={Capsule}
    imageAlt="Capsule"
    heading={text("Heading", headingEx)}
    paragraph={text("Paragraph", paragraphEx)}
  />
);
