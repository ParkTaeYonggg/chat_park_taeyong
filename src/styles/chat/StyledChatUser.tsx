import styled from "styled-components";
import { theme } from "../theme";

export const StyledChatUserContainer = styled.section`
  width: 100%;
  height: 50px;
`;

export const StyledUserBar = styled.h3`
  text-align: center;
  display: grid;
  grid-template-columns: 90% 10%;
  align-items: center;
`;

export const StyledNowUserIcon = styled.span<{ styleColor: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.styleColor ? theme.backgroundColor.green : theme.backgroundColor.darkGray)};
`;
