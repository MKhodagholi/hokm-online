import styled from "styled-components";

const AppStyled = styled.div`
  min-height: 100vh;
  max-width: 500px;
  margin: auto;
  background-color: ${(props) => props.theme.colors.primary};
`;

export default AppStyled;
