import React from "react";
import { color, array } from "@storybook/addon-knobs";
import Header from "./";
import Theme from "../../../utils/styled/theme";
import Heading from "../../01-atoms/heading";

const storyWrapper = (storyFn: Function) => (
  <div>
    {storyFn()}

    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "150vh",
        backgroundColor: "grey",
      }}
    >
      <Heading
        level={3}
        text="Scroll this story to see the header change color"
        color={Theme.colors.darkBlue}
      />
    </div>
  </div>
);

export default {
  title: "Organisms|Header",
  component: Header,
  decorators: [storyWrapper],
};

export const Example = () => (
  <Header
    backgroundColor={color("Header color", Theme.colors.primary)}
    links={array("Links", ["home", "about", "contact"], "||")}
    linkColor={color("Link color", "white")}
  />
);
