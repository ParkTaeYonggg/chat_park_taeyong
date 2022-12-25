import styled from "styled-components";
import { theme } from "./theme";

export const StyledSignUpWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSignUpContainer = styled.div`
  width: 60%;
  height: 100%;
  max-width: 420px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSignUpTitle = styled.div`
  font-size: 3.5rem;
  color: ${theme.fontColor.pink};
  height: 30%;
  display: flex;
  align-items: center;
`;

export const StyledSignUpBox = styled.nav`
  justify-self: end;
  width: 90%;
  height: 30px;
  border-top: 2px solid ${theme.borderColor.gray};
  position: absolute;
  left: 5%;
  bottom: 10px;
`;

export const StyledSignUpLink = styled.a`
  text-align: center;
  width: 100%;
  display: block;
  margin-top: 10px;
  color: ${theme.fontColor.gray};
  cursor: pointer;
  font-size: 1.5rem;
`;

export const StyledSignUpErrorMSG = styled.p`
  padding: 5px;
  max-height: 50px;
  box-sizing: border-box;
  color: ${theme.fontColor.red};
`;
