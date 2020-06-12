import React from "react";
import Paragraph from "./";

export default {
  title: "Atoms|Paragraph",
  component: Paragraph,
};

const text = `Atoms are the basic building blocks of matter. Applied to web interfaces, atoms are our HTML tags, such as a form label, an input or a button. Atoms can also include more abstract elements like color palettes, fonts and even more invisible aspects of an interface like animations.`;

export const Sizes = () => (
  <>
    <Paragraph text={text} size="small" />
    <br />
    <br />
    <Paragraph text={text} />
    <br />
    <br />
    <Paragraph text={text} size="large" />
  </>
);
