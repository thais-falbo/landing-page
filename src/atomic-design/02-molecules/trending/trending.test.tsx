import React from "react";
import { render } from "@testing-library/react";
import Trending from "./";
import ThemeWrapper from "../../../utils/test/themeWrapper";

describe("Molecule - trending", () => {
  const text =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor.";
  const trends = Array(3).fill(text) as [string, string, string];

  test("smoke test", () => {
    const { getAllByText } = render(ThemeWrapper(<Trending trends={trends} />));

    getAllByText(text).forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });

  test("should render 3 trends", () => {
    const { getAllByText } = render(ThemeWrapper(<Trending trends={trends} />));
    expect(getAllByText(text).length).toBe(3);
  });
});
