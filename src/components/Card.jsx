import React from "react";

import CardStyled from "./styles/CardStyled";
import GishCard from "./GishCard";

import GishImg from "../asset/img/AGish.png";
import HeartImg from "../asset/img/AHeart.png";
import KheshtImg from "../asset/img/AKhesht.png";
import PicImg from "../asset/img/APic.png";

const Card = ({ rotateDegree, height, width, type }) => {
  let img;
  if (type === "heart") img = HeartImg;
  else if (type === "khesht") img = KheshtImg;
  else if (type === "pic") img = PicImg;
  else img = GishImg;
  return (
    <CardStyled rotateDegree={rotateDegree} height={height} width={width}>
      <img src={img} />
    </CardStyled>
  );
};

export default Card;
