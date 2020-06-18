import React from "react";
import { render } from "@testing-library/react";
import Grid from "./";
import ThemeWrapper from "../../../utils/test/themeWrapper";

describe("Atom - Grid", () => {
  test("smoke test", () => {
    const { getByText } = render(
      ThemeWrapper(
        <Grid.Container>
          <Grid.Row>
            <Grid.Column lg={1}>Test</Grid.Column>
          </Grid.Row>
        </Grid.Container>
      )
    );

    expect(getByText(/Test/)).toBeInTheDocument();
  });
});
