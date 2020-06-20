import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
import Image from "./";
import Capsule from "../../../assets/images/capsule.jpg";

export default {
  title: "Atoms|Image",
  component: Image,
};

export const Example = () => (
  <Image
    src={Capsule}
    alt="Capsule"
    width={text("Width", "30rem")}
    height={text("Height", "30rem")}
    mirror={boolean("Mirror", false)}
    position={select(
      "Position",
      ["top", "left", "bottom", "right", "center"],
      "center"
    )}
  />
);
