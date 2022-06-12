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
          sHeight={250}
          sWidth={187.5}
          type="gish"
        />
        <Card
          rotateDegree={-5}
          lHeight={400}
          lWidth={300}
          sHeight={250}
          sWidth={187.5}
          type="khesht"
        />
        <Card
          rotateDegree={5}
          lHeight={400}
          lWidth={300}
          sHeight={250}
          sWidth={187.5}
          type="pic"
        />
        <Card
          rotateDegree={15}
          lHeight={400}
          lWidth={300}
          sHeight={250}
          sWidth={187.5}
          type="heart"
        />
        <p>سلطان کارت</p>
      </CardListStyled>
    </CircleCardsStyled>
  );
};

export default CircleCards;
