import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "Lalezar";
    src: url("../../asset/Fonts/Lalezar-Reqular.ttf") format("ttf");
  }
`;
