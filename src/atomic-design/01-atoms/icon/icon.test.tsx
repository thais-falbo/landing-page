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

  describe("arrow", () => {
    test.each(["left", "right"])("%p direction", (direction) => {
      const { container } = render(
        ThemeWrapper(
          <Icon.Arrow
            width="1rem"
            height="1rem"
            direction={direction as "left" | "right"}
          />
        )
      );
      expect(container.firstChild).toBeInTheDocument();
    });
  });
});
