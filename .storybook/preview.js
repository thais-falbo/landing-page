// Applies Global CSS to stories
import React from "react";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/utils/styled/globalStyle";
import Theme from "../src/utils/styled/theme";

addDecorator((storyFn) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
));
