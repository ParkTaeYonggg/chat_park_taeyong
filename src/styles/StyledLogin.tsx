import Link from "next/link";
import styled from "styled-components";
import { theme } from "./theme";

export const StyledLoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.backgroundColor.gray};
`;

export const StyledLoginContainer = styled.div`
  width: 60%;
  height: 70%;
  max-width: 420px;
  max-height: 530px;
  padding: 20px;
  background-color: ${theme.backgroundColor.white};
  border: 1px solid ${theme.backgroundColor.brown};
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledLoginTitle = styled.div`
  height: 30%;
  font-size: 3rem;
  text-align: center;
  line-height: 4;
  color: ${theme.fontColor.pink};
`;

export const StyledLoginSignUpBox = styled.nav`
  justify-self: end;
  width: 90%;
  height: 30px;
  border-top: 2px solid ${theme.borderColor.gray};
  position: absolute;
  left: 5%;
  bottom: 10px;
`;

export const StyledLoginSignUpLink = styled(Link)`
  text-align: center;
  width: 100%;
  display: block;
  margin-top: 10px;
  color: ${theme.fontColor.gray};
  cursor: pointer;
  font-size: 1.5rem;
`;
