import React from "react";

import { Link } from "react-router-dom";

import { HeaderRightStyled } from "./styles/HeaderRight";

const HeaderRight = () => {
  return (
    <HeaderRightStyled>
      <ul>
        <li>
          <Link to="hokm">حکم</Link>
        </li>
        <li>
          <Link to="shelem">شلم</Link>
        </li>
        <li>
          <Link to="haft-khabis">هفت خبیث</Link>
        </li>
      </ul>
    </HeaderRightStyled>
  );
};

export default HeaderRight;
