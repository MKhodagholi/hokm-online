import styled from "styled-components";

export const HeaderStyled = styled.header`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 50px;
    top: 50px;
    li {
      margin-bottom: 20px;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.secondary};
      padding: 1rem;
      width: 150px;
      text-align: center;
      display: inline-block;
      border-radius: 5px;
      font-size: 1.5rem;
      font-family: "Lalezar";
      box-shadow: inset 0 0 4px 4px rgba(0, 0, 0, 1);
      border: 1px solid ${({ theme }) => theme.colors.primary};
      transition: all 0.5s ease;
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid #fff;
      }
    }
  }
`;
