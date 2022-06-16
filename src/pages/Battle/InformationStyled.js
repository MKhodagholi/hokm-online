import styled from "styled-components";

const InfomarionStyled = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  color: #fff;
  .score-card {
    display: flex;
    align-items: flex-end;
    font-size: 1.5rem;
    font-family: "Lalezar";
    color: ${({ theme }) => theme.colors.secondary};
    svg {
      font-size: 3rem;
      margin-right: 5px;
    }
  }
`;

export default InfomarionStyled;
