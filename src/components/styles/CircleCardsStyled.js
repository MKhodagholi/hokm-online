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
  @media screen and (max-width: 1000px) {
    width: 350px;
    height: 350px;
  }
`;

export const CardListStyled = styled.div`
  display: flex;
  margin-top: 25px;
  margin-left: 100px;
  div {
    position: absolute;
    &:nth-child(1) {
      margin-left: 0;
    }
    &:nth-child(2) {
      margin-left: 40px;
    }
    &:nth-child(3) {
      margin-left: 80px;
    }
    &:nth-child(4) {
      margin-left: 120px;
    }
    &:nth-child(4):hover {
      transform: rotate(15deg) !important;
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
    transition: 0.5s;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 50px;
    p {
      font-size: 2rem;
    }
  }
`;

export default CircleCardsStyled;
