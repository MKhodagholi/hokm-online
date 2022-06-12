import React from "react";

import { Link } from "react-router-dom";
import MobileMenuStyled from "./styles/MobileMenu";

const MenuMobile = () => {
  return (
    <MobileMenuStyled>
      <ul>
        <li>
          <Link>تنظیمات</Link>
        </li>
        <li className="active">
          <Link>بازی</Link>
        </li>
        <li>
          <Link>شاپ</Link>
        </li>
      </ul>
    </MobileMenuStyled>
  );
};

export default MenuMobile;
