import React from "react";

import MenuMobile from "../components/MenuMobile";
import Arena from "../components/Battle/Arena";
import BattleStyled from "../components/Battle/styles/BattleStyled";

const Battle = () => {
  return (
    <BattleStyled>
      <Arena />
      <button>پیدا کردن بازی</button>
      <MenuMobile />
    </BattleStyled>
  );
};

export default Battle;
