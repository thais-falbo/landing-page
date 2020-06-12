// Typing so we can use our theme in styled components props
// More here:
// https://github.com/styled-components/styled-components/issues/1589

import Theme from "./theme";

type CustomTheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
