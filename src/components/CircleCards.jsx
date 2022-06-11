import React from "react";
import Card from "./Card";

import CircleCardsStyled from "./styles/CircleCardsStyled";
import { CardListStyled } from "./styles/CircleCardsStyled";

const CircleCards = () => {
  return (
    <CircleCardsStyled>
      <CardListStyled>
        <Card rotateDegree={-15} height={400} width={300} type="gish" />
        <Card rotateDegree={-5} height={400} width={300} type="pic" />
        <Card rotateDegree={5} height={400} width={300} type="khesht" />
        <Card rotateDegree={15} height={400} width={300} type="heart" />
        <p>سلطان کارت</p>
      </CardListStyled>
    </CircleCardsStyled>
  );
};

export default CircleCards;
