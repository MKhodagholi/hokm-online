import React from "react";

import CircleCards from "../components/CircleCards";
import HeaderLeft from "../components/HeaderLeft";
import HeaderRight from "../components/HeaderRight";
import MenuMobile from "../components/MenuMobile";

const Welcome = () => {
  return (
    <>
      <HeaderRight />
      <CircleCards />
      <HeaderLeft />
      <MenuMobile />
    </>
  );
};

export default Welcome;
