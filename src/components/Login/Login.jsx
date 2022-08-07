import React, { useState } from "react";

import LoginStyled from "./LoginStyled";
import { InputBox, Button } from "./LoginStyled";

const Login = ({ loginHandler }) => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const usernameChangeHandler = (e) => {
    const input = e.target.value;
    if (input.trim() !== "") setUsername(input);
  };

  const passwordChangeHandler = (e) => {
    const input = e.target.value;
    if (input.trim() !== "") setPassword(input);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(username, password);
  };

  return (
    <LoginStyled onSubmit={submitHandler}>
      <InputBox>
        <input type="text" onChange={usernameChangeHandler} />
        <span>نام کاربری</span>
      </InputBox>
      <InputBox>
        <input type="text" onChange={passwordChangeHandler} />
        <span>پسورد</span>
      </InputBox>
      <Button>وارد شدن</Button>
    </LoginStyled>
  );
};

export default Login;
