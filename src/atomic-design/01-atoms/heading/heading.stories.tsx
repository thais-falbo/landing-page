import React from "react";
import Heading from "./";

export default {
  title: "Atoms|Heading",
  component: Heading,
};

export const Default = () => (
  <>
    <Heading level={1} text="Heading 1" />
    <Heading level={2} text="Heading 2" />
    <Heading level={3} text="Heading 3" />
    <Heading level={4} text="Heading 4" />
  </>
);

export const DefaultUppercase = () => (
  <>
    <Heading level={1} text="Heading 1" uppercase />
    <Heading level={2} text="Heading 2" uppercase />
    <Heading level={3} text="Heading 3" uppercase />
    <Heading level={4} text="Heading 4" uppercase />
  </>
);

export const Black = () => (
  <>
    <Heading level={1} text="Heading 1" weight="black" />
    <Heading level={2} text="Heading 2" weight="black" />
    <Heading level={3} text="Heading 3" weight="black" />
    <Heading level={4} text="Heading 4" weight="black" />
  </>
);

export const BlackUppercase = () => (
  <>
    <Heading level={1} text="Heading 1" weight="black" uppercase />
    <Heading level={2} text="Heading 2" weight="black" uppercase />
    <Heading level={3} text="Heading 3" weight="black" uppercase />
    <Heading level={4} text="Heading 4" weight="black" uppercase />
  </>
);
