import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  /*
   * CSS VARIABLES
   */
  :root {
    --font-size: 62.5%;
  }

  /* Tablet */
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.lg}){
    :root {
      --font-size: 56.25%; /* 1 rem = 9px, 9/16 = 50% */
    }
  }

  /* Phone */
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md}){
    :root {
      --font-size: 43.75%; /* 1 rem = 7px, 7/16 = 43.75 */
    }
  }


  /*
   * Calculation to make 1rem = 10px so it's easier to design the website
   * More here:
   * https://stackoverflow.com/questions/28988445/css-62-5-why-do-developers-use-it
   */
  html {
    font-size: var(--font-size);
  }

  body { 
    background-color: #f8f8f8;
  }
`;

export default GlobalStyle;
