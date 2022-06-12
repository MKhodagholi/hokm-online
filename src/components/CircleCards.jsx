import React from "react";
import Card from "./Card";

import CircleCardsStyled from "./styles/CircleCardsStyled";
import { CardListStyled } from "./styles/CircleCardsStyled";

const CircleCards = () => {
  return (
    <CircleCardsStyled>
      <CardListStyled>
        <Card
          rotateDegree={-15}
          lHeight={400}
          lWidth={300}
          sHeight={200}
          sWidth={150}
          type="gish"
        />
        <Card
          rotateDegree={-5}
          lHeight={400}
          lWidth={300}
          sHeight={200}
          sWidth={150}
          type="khesht"
        />
        <Card
          rotateDegree={5}
          lHeight={400}
          lWidth={300}
          sHeight={200}
          sWidth={150}
          type="pic"
        />
        <Card
          rotateDegree={15}
          lHeight={400}
          lWidth={300}
          sHeight={200}
          sWidth={150}
          type="heart"
        />
        <p>سلطان کارت</p>
      </CardListStyled>
    </CircleCardsStyled>
  );
};

export default CircleCards;
