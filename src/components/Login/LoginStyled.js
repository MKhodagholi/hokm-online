import styled from "styled-components";

const LoginStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    padding: 1.5rem 2rem;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    background-color: transparent;
    border-radius: 4px;
    font-size: 2rem;
    outline: none;
    font-family: "Lalezar";
    color: #1b1b1b;
    width: 90%;
    margin: auto;
    &:focus {
      color: ${({ theme }) => theme.colors.redColor};
    }
  }
  input:focus ~ span {
    right: 15%;
    top: -20%;
    transform: translate(15%, 20%);
    border-right: 1px solid ${({ theme }) => theme.colors.secondary};
    border-left: 1px solid ${({ theme }) => theme.colors.secondary};
  }
  span {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    font-size: 1.5rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.darkBlueColor};
    transition: 0.5s;
    background-color: #1b1b1b;
    padding: 0 1rem;
    font-family: monospace;
    pointer-events: none;
    font-family: "Lalezar";
  }
`;

export const Button = styled.button`
  background-color: transparent;
  width: 90%;
  color: ${({ theme }) => theme.colors.redColor};
  padding: 1rem;
  cursor: pointer;
  font-size: 2rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grayColor};
  font-family: "Lalezar";
`;

export default LoginStyled;
