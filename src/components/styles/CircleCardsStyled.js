import styled from "styled-components";

export const CircleCardsStyled = styled.div`
  width: 600px;
  height: 600px;
  background-color: #000;
  border-radius: 50%;
  z-index: 2;
  position: fixed;
  left: 50%;
  top: 50%;
  border: 1px solid #fff;
  transform: translate(-50%, -50%);
`;

export const CardListStyled = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 80px;
  div {
    position: absolute;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:nth-child(2) {
      margin-left: 30px;
    }
    &:nth-child(3) {
      margin-left: 60px;
    }
    &:nth-child(4) {
      margin-left: 90px;
    }
  }
  p {
    position: fixed;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 3rem;
    font-family: "Lalezar";
  }
`;

export default CircleCardsStyled;
