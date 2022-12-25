import styled from "styled-components";
import { theme } from "../theme";

export const StyledButtonWrapper = styled.div<{ size: "small" | "medium" | "large" }>`
  width: 100%;
  height: ${(props) => (props.size === "small" ? "30px" : props.size === "medium" ? "45px" : "60px")};
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  border-radius: 30px;
  background-color: ${theme.backgroundColor.red};
  width: 90%;
  height: 100%;
  border: none;
  cursor: pointer;
  color: ${theme.fontColor.white};
  font-size: 1.8rem;
`;
