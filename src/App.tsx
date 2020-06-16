import React from "react";
import GlobalStyle from "./utils/styled/globalStyle";
import { ThemeProvider } from "styled-components";
import Home from "./atomic-design/05-pages/home";
import Theme from "./utils/styled/theme";

// TODO: Routes and lazy loading
const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
);
export default App;
