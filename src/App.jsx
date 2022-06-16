import React from "react";

import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import AppStyled from "./components/styles/AppStyled";
import { GlobalStyles } from "./components/styles/GlobalStyled";
import Battle from "./pages/Battle/Battle";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import MenuMobile from "./components/MenuMobile";

const theme = {
  colors: {
    primary: "#1b1b1b",
    secondary: "#e6da69",
    redColor: "#fb1206",
    darkBlueColor: "#0d4594",
  },
  fonts: {
    Lalezar: "Lalezar",
  },
};

const App = () => {
  const isAuthenticate = true;
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        {/* <MusicPlayer /> */}
        <GlobalStyles />
        <Routes>
          <Route path="/battle" element={<Battle />} />
        </Routes>
        {isAuthenticate && <MenuMobile />}
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
