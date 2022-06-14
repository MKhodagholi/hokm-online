import React from "react";

import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import AppStyled from "./components/styles/AppStyled";
import { GlobalStyles } from "./components/styles/GlobalStyled";
import Welcome from "./pages/Welcome";
import Battle from "./pages/Battle";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

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
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <MusicPlayer />
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/battle" element={<Battle />} />
        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
