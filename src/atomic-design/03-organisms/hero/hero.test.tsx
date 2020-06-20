import React from "react";
import Hero from "./";
import { render } from "@testing-library/react";
import Theme from "../../../utils/styled/theme";
import ThemeWrapper from "../../../utils/test/themeWrapper";
import resizeScreen from "../../../utils/test/resizeScreen";
import Capsule from "../../../assets/images/capsule.jpg";

describe("Organism - Hero", () => {
  const trends = Array(3).fill(
    "Lorem ipsum dolor sit amet, consectetuer adipiscing ligula eget dolor."
  ) as [string, string, string];

  const component: JSX.Element = ThemeWrapper(
    <Hero
      image={{ src: Capsule, alt: "Capsule" }}
      cta={{
        headingText: "heading",
        paragraphText: "paragraph",
        button: { text: "click", onClick: () => {} },
      }}
      trends={trends}
    />
  );

  test("smoke test", () => {
    const { getByText } = render(component);

    expect(getByText("heading")).toBeInTheDocument();
    expect(getByText("paragraph")).toBeInTheDocument();
  });

  test("should render trending component according to screen size", () => {
    const breakpointSize = Theme.breakpoints.xl;

    const { getAllByText, queryByText } = render(component);

    // Make screen small
    resizeScreen(breakpointSize);

    expect(queryByText(/Trending|Today/)).not.toBeInTheDocument();

    // Make screen bigger
    resizeScreen(breakpointSize + 1);

    const elements = getAllByText(/Trending|Today/);

    elements.forEach((el) => {
      expect(el.tagName).toBe("H4");
    });
  });
});
