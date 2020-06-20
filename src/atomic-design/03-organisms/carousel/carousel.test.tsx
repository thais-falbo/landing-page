import React from "react";
import { render } from "@testing-library/react";
import Carousel from "./";
import ThemeWrapper from "../../../utils/test/themeWrapper";

jest.mock("react-slick");

describe("Organism - carousel", () => {
  test("render without crashing", () => {
    render(ThemeWrapper(<Carousel items={[<div />]} />));
  });
});
