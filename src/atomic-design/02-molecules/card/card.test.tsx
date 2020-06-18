import React from "react";
import Card from "./";
import { render } from "@testing-library/react";
import Capsule from "../../../assets/images/capsule.jpg";
import themeWrapper from "../../../utils/test/themeWrapper";

describe("Molecule - card", () => {
  test("smoke test", () => {
    const { getByText, getByRole } = render(
      themeWrapper(
        <Card
          imageSrc={Capsule}
          imageAlt="Capsule"
          heading="heading"
          paragraph="paragraph"
          width="1rem"
          height="1rem"
        />
      )
    );

    expect(getByText(/heading/)).toBeInTheDocument();
    expect(getByText(/paragraph/)).toBeInTheDocument();
    expect(getByRole(/img/)).toBeInTheDocument();
    expect(getByRole("img", { name: "Capsule" })).toBeTruthy();
  });
});
