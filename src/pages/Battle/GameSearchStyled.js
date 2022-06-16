import styled from "styled-components";

const GameSearchStyled = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 20vh;
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
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    p {
      position: absolute;
      left: 0;
      background: #000;
      bottom: 0;
      color: #fff;
      font-family: "Lalezar";
      padding: 0.25rem 0.5rem;
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
