import React from "react";

import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/GlobalStyled";
import AppStyled from "./components/styles/AppStyled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#d01515",
    secondary: "#3e171c",
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
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
