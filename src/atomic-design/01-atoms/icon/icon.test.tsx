import React from "react";
import Icon from "./";
import { render } from "@testing-library/react";
import ThemeWrapper from "../../../utils/test/themeWrapper";

describe("Atom - icons", () => {
  test("dot", () => {
    const { container } = render(
      ThemeWrapper(<Icon.Dot width="1rem" height="1rem" />)
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  test("logo", () => {
    const { container } = render(
      ThemeWrapper(<Icon.Logo width="1rem" height="1rem" />)
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
