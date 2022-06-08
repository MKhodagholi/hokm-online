import styled from "styled-components";

const CardStyled = styled.div`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);
  transform: rotate(${({ rotateDegree }) => rotateDegree}deg);
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: rotate(${({ rotateDegree }) => -Math.abs(rotateDegree) - 5}deg)
      translateX(-80px) !important;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.8);
    /* margin-left: -30px !important; */
  }
`;

export default CardStyled;
