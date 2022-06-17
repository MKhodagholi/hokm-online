import styled from "styled-components";

const GameSearchStyled = styled.div`
  width: 50%;
  margin: auto;
  direction: rtl;
  width: 210px;
  .arena {
    height: 280px;
    width: 210px;
    margin: auto;
    border: 1px solid #fff;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 2rem;
    position: relative;
    box-shadow: 0 0 4px 4px #000;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &-information {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      text-align: center;
      position: absolute;
      left: 0;
      bottom: 0;
      user-select: none;
      color: #fff;
      font-family: "Lalezar";
      padding: 0.5rem;
      p {
        cursor: pointer;
      }
      span {
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 1.25rem;
        display: flex;
        align-items: flex-start;
        svg {
          font-size: 1.5rem;
          margin-right: 5px;
        }
      }
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 25%;
      background: linear-gradient(0, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
    }
  }
  .options {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  button {
    outline: none;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    font-family: "Lalezar";
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.5s, border 0s;
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default GameSearchStyled;
