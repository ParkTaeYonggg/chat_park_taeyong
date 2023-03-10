import { useEffect } from "react";
import { userInfo } from "../../interface/commonInfo";
import { StyledChatUserContainer, StyledNowUserIcon, StyledUserBar } from "../../styles/chat/StyledChatUser";

const ChatUser = ({ userList, nowUser }: { userList: userInfo[]; nowUser: userInfo[] }): JSX.Element => {
  useEffect(() => {}, []);
  const handleUserClick = async (id: any) => {
    console.log(id, "ㅋㅋ");
  };
  return (
    <StyledChatUserContainer>
      <p style={{ textAlign: "center" }}>전체 인원 : {userList.length} 명</p>
      {userList.map((user, idx: number) => (
        <StyledUserBar key={`user-${user.id + String(idx)}`} onClick={() => handleUserClick(user.id)}>
          {user.id}
          {nowUser.find((e) => e.id === user.id) ? <StyledNowUserIcon styleColor={true} /> : <StyledNowUserIcon styleColor={false} />}
        </StyledUserBar>
      ))}
    </StyledChatUserContainer>
  );
};

export default ChatUser;
