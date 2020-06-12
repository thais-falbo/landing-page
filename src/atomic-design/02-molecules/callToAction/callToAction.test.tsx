import React from "react";
import CallToAction from "./";
import ThemeWrapper from "../../../utils/test/themeWrapper";
import { render } from "@testing-library/react";

describe("Molecule - call to action", () => {
  test("smoke test", () => {
    const { getByText } = render(
      ThemeWrapper(
        <CallToAction
          headingText="heading"
          paragraphText="paragraph"
          button={{ text: "click", onClick: () => {} }}
        />
      )
    );

    ["heading", "paragraph", "click"].forEach((txt) => {
      expect(getByText(txt)).toBeInTheDocument();
    });
  });
});
