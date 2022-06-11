import React from "react";

import { GlobalStyles } from "./components/styles/GlobalStyled";
import AppStyled from "./components/styles/AppStyled";
import { ThemeProvider } from "styled-components";
import CircleCards from "./components/CircleCards";
import HeaderLeft from "./components/HeaderLeft";
import HeaderRight from "./components/HeaderRight";

const theme = {
  colors: {
    primary: "#1b1b1b",
    secondary: "#e6da69",
    redColor: "#fb1206",
  },
  fonts: {
    Lalezar: "Lalezar",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <GlobalStyles />
        <HeaderRight />
        <HeaderLeft />
        <CircleCards />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
