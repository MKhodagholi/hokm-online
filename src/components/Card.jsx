import React from "react";

import CardStyled from "./styles/CardStyled";

import GishImg from "../asset/img/AGish.png";
import HeartImg from "../asset/img/AHeart.png";
import KheshtImg from "../asset/img/AKhesht.png";
import PicImg from "../asset/img/APic.png";

const Card = ({ rotateDegree, lHeight, lWidth, type, sHeight, sWidth }) => {
  let img;
  if (type === "heart") img = HeartImg;
  else if (type === "khesht") img = KheshtImg;
  else if (type === "pic") img = PicImg;
  else img = GishImg;
  return (
    <CardStyled
      rotateDegree={rotateDegree}
      sHeight={sHeight}
      sWidth={sWidth}
      lHeight={lHeight}
      lWidth={lWidth}
    >
      <img src={img} />
    </CardStyled>
  );
};

export default Card;
