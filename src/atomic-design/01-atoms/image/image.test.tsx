import React from "react";
import Image from "./";
import { render } from "@testing-library/react";
import Capsule from "../../../assets/images/capsule.jpg";

describe("Atom - Image", () => {
  const component: JSX.Element = (
    <Image alt="Capsule" width="1rem" height="1rem" src={Capsule} />
  );

  test("smoke test", () => {
    const { getByRole } = render(component);
    expect(getByRole("img")).toBeInTheDocument();
  });

  test("should have img role and aria-label", () => {
    const { getByRole } = render(component);
    expect(getByRole("img", { name: "Capsule" })).toBeTruthy();
  });

  test("should mirror and position", () => {
    const { getByRole } = render(
      <Image
        alt="Capsule"
        width="1rem"
        height="1rem"
        src={Capsule}
        mirror
        position="top"
      />
    );
    expect(getByRole("img")).toHaveStyle("background-position: top");
    expect(getByRole("img")).toHaveStyle("transform: rotateY(180deg)");
  });
});
