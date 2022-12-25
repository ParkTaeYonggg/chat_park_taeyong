import styled from "styled-components";
import { theme } from "../theme";

export const StyledInput = styled.input`
  height: 70%;
  width: 100%;
  border: 3px solid ${theme.borderColor.red};
  border-radius: 5px;
  &::placeholder {
    color: ${theme.fontColor.gray};
    font-weight: lighter;
    font-size: 10px;
    padding-left: 5px;
  }
`;
export const StyledInputWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
