import Link from "next/link";
import styled from "styled-components";
import { theme } from "../theme";

export const StyledChatWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: grid;
  grid-template-columns: 70% 30%;

  border: 1px solid ${theme.borderColor.red};
  border-bottom: none;
`;
export const StyledEnteredUserNumberBar = styled.div`
  min-height: 50px;
  border-right: 1px solid ${theme.borderColor.red};
  display: flex;
  align-items: center;
  padding: 0 5px;
  justify-content: space-between;
`;
export const StyledChatLogOutBar = styled.span`
  color: ${theme.fontColor.gray};
  text-decoration: none;
  cursor: pointer;
`;
export const StyledChatContainer = styled.div`
  height: 80vh;
  border: 1px solid ${theme.borderColor.red};
  border-left: none;
  padding: 5px 5px;
  overflow: scroll;
`;
export const StyledChatBar = styled.div<{ isYou: boolean }>`
  display: flex;
  gap: 10px;
  flex-direction: ${(props) => (props.isYou ? "row" : "row-reverse")};
`;
export const StyledChatDateBar = styled.div<{ isYou: boolean }>`
  text-align: ${(props) => (props.isYou ? "start" : "end")};
  color: ${theme.fontColor.gray};
  font-size: 0.5rem;
`;
export const StyledSendMessageBar = styled.span`
  display: grid;
  grid-template-columns: 70% 30%;
  height: 50px;
`;
