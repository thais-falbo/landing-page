import React from "react";
import { array } from "@storybook/addon-knobs";
import Trending from "./";

export default {
  title: "Molecules|Trending",
  component: Trending,
};

const trends = Array(3).fill(
  "Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor."
) as [string, string, string];

export const Default = () => (
  <Trending
    trends={array("Trends", trends, "||") as [string, string, string]}
  />
);
