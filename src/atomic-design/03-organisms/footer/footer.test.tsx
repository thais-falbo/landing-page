import React from "react";
import Footer from "./";
import { render } from "@testing-library/react";
import themeWrapper from "../../../utils/test/themeWrapper";

describe("Organism - footer", () => {
  test("smoke test", () => {
    const { getByText } = render(themeWrapper(<Footer text="Text" />));
    expect(getByText(/Text/)).toBeInTheDocument();
  });
});
