import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background: ${({ theme }) => (theme.darkMode ? "#222" : "#fff")};
    color: ${({ theme }) => (theme.darkMode ? "#fff" : "#000")};
    transition: background 0.3s ease-in-out;
  }
`;

export default GlobalStyles;
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    darkMode: boolean;
  }
}