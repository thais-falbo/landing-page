import React from "react";
import About from "./";
import { render } from "@testing-library/react";
import themeWrapper from "../../../utils/test/themeWrapper";
import Capsule from "../../../assets/images/capsule.jpg";

describe("Organism - About", () => {
  test("smoke test", () => {
    const { getByText } = render(
      themeWrapper(
        <About text="some text" imageSrc={Capsule} imageAlt="capsule" />
      )
    );
    expect(getByText(/some text/)).toBeInTheDocument();
  });
});
