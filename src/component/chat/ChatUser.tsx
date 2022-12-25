import { chatUserPropsInfo } from "../../interface/chatInfo";
import { StyledChatUserContainer } from "../../styles/chat/StyledChatUser";

const ChatUser = ({ userList }: chatUserPropsInfo): JSX.Element => {
  return (
    <StyledChatUserContainer>
      {userList.map((user) => (
        <h3 key={`user-${user.id}`}>{user.id}</h3>
      ))}
    </StyledChatUserContainer>
  );
};

export default ChatUser;
