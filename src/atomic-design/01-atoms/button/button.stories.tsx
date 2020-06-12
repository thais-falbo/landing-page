import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./";

export default {
  title: "Atoms|Button",
  component: Button,
};

export const Sizes = () => (
  <>
    <Button text="small" size="small" onClick={action("Clicked")} />
    <br />
    <br />
    <Button text="normal" onClick={action("Clicked")} />
    <br />
    <br />
    <Button text="large" size="large" onClick={action("Clicked")} />
  </>
);

export const Disabled = () => (
  <Button text="Disabled" disabled onClick={() => {}} />
);
