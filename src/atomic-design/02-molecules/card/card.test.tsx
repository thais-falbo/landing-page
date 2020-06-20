import React from "react";
import Card from "./";
import { render } from "@testing-library/react";
import Capsule from "../../../assets/images/capsule.jpg";
import ThemeWrapper from "../../../utils/test/themeWrapper";

describe("Molecule - card", () => {
  test("smoke test", () => {
    const { getByText, getByRole } = render(
      ThemeWrapper(
        <Card
          imageSrc={Capsule}
          imageAlt="Capsule"
          heading="heading"
          paragraph="paragraph"
        />
      )
    );

    expect(getByText(/heading/)).toBeInTheDocument();
    expect(getByText(/paragraph/)).toBeInTheDocument();
    expect(getByRole(/img/)).toBeInTheDocument();
    expect(getByRole("img", { name: "Capsule" })).toBeTruthy();
  });
});
