import React from "react";

import { Link } from "react-router-dom";
import MobileMenuStyled from "./styles/MobileMenu";
import { VscAccount } from "react-icons/vsc";
import { AiFillAppstore, AiTwotoneShop } from "react-icons/ai";

const MenuMobile = () => {
  return (
    <MobileMenuStyled>
      <ul>
        <li>
          <Link to="/profile">
            <VscAccount />
          </Link>
        </li>
        <li className="active">
          <Link to="/battle">
            <AiFillAppstore />
          </Link>
        </li>
        <li>
          <Link to="/shop">
            <AiTwotoneShop />
          </Link>
        </li>
      </ul>
    </MobileMenuStyled>
  );
};

export default MenuMobile;
