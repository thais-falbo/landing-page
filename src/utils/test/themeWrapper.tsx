// Test util used when testing components which use theme, otherwise it will throw error
import React from "react";
import Theme from "../styled/theme";
import { ThemeProvider } from "styled-components";

export default (children: React.ReactChild): JSX.Element => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};
