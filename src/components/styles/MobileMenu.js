import styled from "styled-components";

const MobileMenuStyled = styled.div`
  ul {
    list-style: none;
    direction: rtl;
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid black;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.5);
    background-color: ${({ theme }) => theme.colors.darkBlueColor};
    li {
      /* width: 100%; */
      flex-grow: 2;
      border-left: 1px solid black;
      a {
        text-align: center;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.secondary};
        font-size: 2rem;
        padding: 1rem;
        transition: all 0.5s ease;
        &:hover {
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.redColor};
        }
      }
    }
    li.active {
      /* background-color: #f0f8ff; */
    }
  }
`;

export default MobileMenuStyled;
