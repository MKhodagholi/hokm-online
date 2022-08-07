import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import AppStyled from "./components/styles/AppStyled";
import { GlobalStyles } from "./components/styles/GlobalStyled";
import Battle from "./pages/Battle/Battle";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import MenuMobile from "./components/MenuMobile";
import Shop from "./pages/Shop/Shop";
import ProfilePage from "./pages/Profile/ProfilePage";
import Login from "./components/Login/Login";
import axios from "axios";
import Profile from "./components/Profile/Profile";

const theme = {
  colors: {
    primary: "#1b1b1b",
    secondary: "#e6da69",
    redColor: "#fb1206",
    darkBlueColor: "#0d4594",
    grayColor: "#b3b0b0",
    whiteColor: "#fff",
  },
  fonts: {
    Lalezar: "Lalezar",
  },
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://hokm-8cbcc-default-rtdb.firebaseio.com/users.json")
      .then(({ data }) => {
        for (const key in data) {
          const newUsers = [];
          const user = {
            username: data[key].username,
            password: data[key].password,
          };
          newUsers.push(user);
          setUsers(newUsers);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = (username, password) => {
    users.map((user) => {
      if (user.username === username && user.password === password) {
        setUser({ username, password });
        setIsAuthenticated(true);
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        {/* <MusicPlayer /> */}
        <GlobalStyles />
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <Login loginHandler={loginHandler} />
              ) : (
                <Profile username={user.username} />
              )
            }
          />
        </Routes>
        {isAuthenticated && <MenuMobile />}
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
