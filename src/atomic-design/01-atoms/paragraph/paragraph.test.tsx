import React from "react";
import Paragraph from "./";
import { render } from "@testing-library/react";
import ThemeWrapper from "../../../utils/test/themeWrapper";

describe("Atom - Paragraph", () => {
  test("smoke test", () => {
    const text = "Some text here";
    const { getByText } = render(ThemeWrapper(<Paragraph text={text} />));
    expect(getByText(text)).toBeInTheDocument();
  });

  describe("Sizes", () => {
    const cases: Array<["small" | "normal" | "large", string]> = [
      ["small", "1.6rem"],
      ["normal", "1.8rem"],
      ["large", "2.2rem"],
    ];

    test.each(cases)(
      "should render size %p with correct styles",
      (size, fontSize) => {
        const { getByText } = render(
          ThemeWrapper(<Paragraph text={size} size={size} />)
        );
        expect(getByText(size)).toHaveStyle(`font-size: ${fontSize}`);
      }
    );
  });
});
