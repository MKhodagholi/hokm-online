import React from "react";

import HeaderLeft from "./components/HeaderLeft";
import { GlobalStyles } from "./components/styles/GlobalStyled";
import AppStyled from "./components/styles/AppStyled";
import { ThemeProvider } from "styled-components";
import CircleCards from "./components/CircleCards";

const theme = {
  colors: {
    primary: "#1b1b1b",
    secondary: "#e6da69",
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
        <Header />
        <CircleCards />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
