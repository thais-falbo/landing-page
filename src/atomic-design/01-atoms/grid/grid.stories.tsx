import React from "react";
import Theme from "../../../utils/styled/theme";
import Grid from "./";

export default {
  title: "Atoms|Grid",
  component: Grid,
};

const Item = () => (
  <div
    style={{
      backgroundColor: Theme.colors.primary,
      height: "20rem",
      width: "100%",
    }}
  ></div>
);

export const Row = () => (
  <Grid.Container>
    <Grid.Row>
      <Grid.Column span={12}>
        <Item />
      </Grid.Column>
    </Grid.Row>
  </Grid.Container>
);

export const Columns = () => (
  <Grid.Container>
    <Grid.Row>
      {[...Array(12)].map((_, i) => (
        <Grid.Column key={i}>
          <Item />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid.Container>
);
