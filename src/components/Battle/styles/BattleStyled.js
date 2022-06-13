import styled from "styled-components";

const BattleStyled = styled.div`
  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    outline: none;
    box-shadow: 2px 2px 8px 8px rgba(0, 0, 0, 0.6);
    border: none;
    padding: 1rem 2rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 2rem;
    position: fixed;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -75%);
    cursor: pointer;
    font-family: "Lalezar";
    transition: 0.5s;
    overflow: hidden;
    &:hover {
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default BattleStyled;
