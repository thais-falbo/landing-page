import React from "react";
import Header from "./";
import { render, fireEvent } from "@testing-library/react";
import themeWrapper from "../../../utils/test/themeWrapper";
import resizeScreen from "../../../utils/test/resizeScreen";
import Theme from "../../../utils/styled/theme";

describe("Organism - header", () => {
  const component = themeWrapper(
    <Header backgroundColor="red" links={["home"]} />
  );

  test("smoke test", () => {
    const { getByText } = render(component);
    expect(getByText(/home/)).toBeInTheDocument();
  });

  test("should change background color on scroll", () => {
    const { getByRole } = render(component);
    fireEvent.scroll(window, { target: { scrollY: 49 } });
    const element = getByRole(/banner/);
    expect(element).toHaveStyle("background-color: transparent;");
    fireEvent.scroll(window, { target: { scrollY: 50 } });
    expect(element).toHaveStyle("background-color: red;");
  });

  describe("Burger menu", () => {
    test("should NOT show burger menu on large screen", () => {
      resizeScreen(Theme.breakpoints.xl);
      const { queryByLabelText } = render(component);
      expect(queryByLabelText(/Open menu/)).toBeNull();
    });

    describe("Small screen", () => {
      // Resize screen to small
      beforeAll(() => {
        resizeScreen(Theme.breakpoints.sm);
      });

      test("should show burger menu on small screen", () => {
        const { getByLabelText } = render(component);
        expect(getByLabelText(/Open menu/)).toBeInTheDocument();
      });

      test("should open burger menu", () => {
        const { getByLabelText, getByText } = render(component);
        fireEvent.click(getByLabelText(/Open menu/));
        expect(getByText(/home/)).toBeVisible();
      });
    });
  });
});
