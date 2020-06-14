import React from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { ThemeProvider } from "styled-components";
import Theme from "../src/utils/styled/theme";
import GlobalStyle from "../src/utils/styled/globalStyle";

addDecorator((storyFn) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
));

addDecorator(withKnobs);
