import React from "react";

import { Link } from "react-router-dom";

import { HeaderLeftStyled } from "./styles/HeaderLeft";

const HeaderLeft = () => {
  return (
    <HeaderLeftStyled>
      <ul>
        <li>
          <Link to="/register">ثبت نام</Link>
        </li>
        <li>
          <Link to="/login">ورود</Link>
        </li>
        <li>
          <Link to="/about-us">درباره ما</Link>
        </li>
        <li>
          <Link to="/contact-us">تماس با ما</Link>
        </li>
      </ul>
    </HeaderLeftStyled>
  );
};

export default HeaderLeft;
