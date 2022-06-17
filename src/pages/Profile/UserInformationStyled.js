import styled from "styled-components";

const UserInformationStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 90%;
  margin: 1rem auto;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.darkBlueColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  .user-information {
    display: flex;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
    width: 100%;
    svg {
      margin: 0 1rem;
      margin-left: 0;
      margin-left: 10px;
      padding: 0.5rem;
      font-size: 2.5rem;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
    }
    .title-description {
      display: flex;
      flex-direction: column;
      span {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.grayColor};
      }
    }
    .user-informaion__go {
      position: absolute;
      left: 30px;
      color: ${({ theme }) => theme.colors.grayColor};
    }
  }
`;

export default UserInformationStyled;
