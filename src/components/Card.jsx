import React from "react";

import CardStyled from "./styles/CardStyled";

const Card = ({ rotateDegree, height, width }) => {
  return (
    <CardStyled
      rotateDegree={rotateDegree}
      height={height}
      width={width}
    ></CardStyled>
  );
};

export default Card;
