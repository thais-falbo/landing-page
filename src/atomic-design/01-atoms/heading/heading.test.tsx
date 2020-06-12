import React from "react";
import Heading from "./";
import { render } from "@testing-library/react";
import ThemeWrapper from "../../../utils/test/themeWrapper";

describe("Atom - Heading", () => {
  test("smoke test", () => {
    const { getByText } = render(
      ThemeWrapper(<Heading text="Heading" level={1} />)
    );
    expect(getByText(/Heading/)).toBeInTheDocument();
  });

  test("should render uppercase", () => {
    const { getByText } = render(
      ThemeWrapper(<Heading text="Heading" level={1} uppercase />)
    );
    expect(getByText(/Heading/)).toHaveStyle("text-transform: uppercase");
  });
});
