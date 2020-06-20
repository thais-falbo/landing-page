import React from "react";
import Theme from "../../../utils/styled/theme";
import { number } from "@storybook/addon-knobs";
import Grid from "./";

export default {
  title: "Atoms|Grid",
  component: Grid,
};

const Item = () => (
  <div
    style={{
      backgroundColor: Theme.colors.primary,
      fontFamily: Theme.fonts.poppins.name,
      fontSize: "1.6rem",
      color: "white",
      height: "30rem",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    COLUMN
  </div>
);

const knobOptions = { min: 1, max: 12, step: 1 };

export const Example = () => (
  <Grid.Container>
    <Grid.Row>
      {[...Array(number("Columns", 12, knobOptions))].map((_, i) => (
        <Grid.Column key={i}>
          <Item />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid.Container>
);
