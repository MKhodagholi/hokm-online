import styled from "styled-components";

const CardStyled = styled.div`
  width: ${({ lWidth }) => lWidth}px;
  height: ${({ lHeight }) => lHeight}px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);
  transform: rotate(${({ rotateDegree }) => rotateDegree}deg);
  cursor: pointer;
  transition: all 0.5s ease;
  z-index: 5;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: rotate(${({ rotateDegree }) => -Math.abs(rotateDegree) - 5}deg)
      translateX(-200px) !important;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.8);
  }
  @media screen and (max-width: 1000px) {
    width: ${({ sWidth }) => sWidth}px;
    height: ${({ sHeight }) => sHeight}px;
    z-index: 5;
    &:hover {
      transform: rotate(${({ rotateDegree }) => -Math.abs(rotateDegree) - 5}deg)
        translateX(-100px) !important;
      box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.8);
    }
  }
`;

export default CardStyled;
