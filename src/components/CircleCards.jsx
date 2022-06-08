import React from "react";
import Card from "./Card";

import CircleCardsStyled from "./styles/CircleCardsStyled";
import { CardListStyled } from "./styles/CircleCardsStyled";

const CircleCards = () => {
  return (
    <CircleCardsStyled>
      <CardListStyled>
        <Card rotateDegree={-15} height={400} width={300} />
        <Card rotateDegree={5} height={400} width={300} />
        <Card rotateDegree={15} height={400} width={300} />
        <Card rotateDegree={25} height={400} width={300} />
        <p>سلطان حکم</p>
      </CardListStyled>
    </CircleCardsStyled>
  );
};

export default CircleCards;
