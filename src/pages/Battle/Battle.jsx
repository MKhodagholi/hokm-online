import React from "react";
import BattleStyled from "./BattleStyled";
import GameSearchStyled from "./GameSearchStyled";

import arenaImg from "../../asset/img/battleImg.jpeg";

import InformationStyled from "./InformationStyled";
import { GiCardBurn } from "react-icons/gi";

const Battle = () => {
  return (
    <BattleStyled>
      <InformationStyled>
        <div className="score-card">
          <GiCardBurn /> ۳
        </div>
      </InformationStyled>
      <GameSearchStyled>
        <div className="arena">
          <img src={arenaImg} />
          <p>آرنای شماره ۱</p>
        </div>
        <div className="options">
          <button>تک نفره</button>
          <button>گروهی</button>
        </div>
      </GameSearchStyled>
    </BattleStyled>
  );
};

export default Battle;

// <BattleStyled>
// <GameStart>
{
  /* <Arena />  */
}
{
  /* </GameStart>  */
}
// </BattleStyled>
