import { userInfo } from "../../interface/commonInfo";
import { StyledChatUserContainer, StyledUserBar } from "../../styles/chat/StyledChatUser";

const ChatUser = ({ userList }: { userList: userInfo[] }): JSX.Element => {
  return (
    <StyledChatUserContainer>
      {userList.map((user, idx: number) => (
        <StyledUserBar key={`user-${user.id + String(idx)}`}>{user.id}</StyledUserBar>
      ))}
    </StyledChatUserContainer>
  );
};

export default ChatUser;
