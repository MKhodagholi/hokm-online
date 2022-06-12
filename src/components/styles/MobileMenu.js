import styled from "styled-components";

const MobileMenuStyled = styled.div`
  ul {
    list-style: none;
    direction: rtl;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    /* justify-content: space-between; */
    li {
      width: 33.333%;
      flex-grow: 2;
      border-left: 1px solid black;
      a {
        text-align: center;
        width: 100%;
        display: inline-block;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2rem;
        padding: 1rem 2rem;
        transition: all 0.5s ease;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.redColor};
        }
      }
    }
    li.active {
      background-color: #f0f8ff;
    }
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export default MobileMenuStyled;
