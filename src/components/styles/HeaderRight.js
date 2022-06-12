import styled from "styled-components";

export const HeaderRightStyled = styled.header`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    li {
      margin-bottom: 20px;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.redColor};
      padding: 1rem;
      width: 150px;
      text-align: center;
      display: inline-block;
      border-radius: 5px;
      font-size: 1.5rem;
      /* font-family: "Lalezar"; */
      box-shadow: inset 0 0 4px 4px rgba(0, 0, 0, 1);
      border: 1px solid ${({ theme }) => theme.colors.primary};
      transition: all 0.5s ease;
      user-select: none;
      &:hover {
        color: ${({ theme }) => theme.colors.redColor};
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid #fff;
      }
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
