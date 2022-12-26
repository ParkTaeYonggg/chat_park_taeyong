import { chatPropsInfo, requestDataInfo } from "../../interface/chatInfo";
import {
  StyledChatBar,
  StyledChatContainer,
  StyledChatDateBar,
  StyledChatLogOutBar,
  StyledChatWrapper,
  StyledEnteredUserNumberBar,
  StyledSendMessageBar,
} from "../../styles/chat/StyledChat";
import SocketIOClient from "socket.io-client";
import ChatUser from "./ChatUser";
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";
import moment from "moment";
import axios_requestCahtApi from "../../fetcher/axios_requestChat";
import axios_deleteUser from "../../fetcher/axios_deleteUser";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";

const Chat = ({ userData, userList, handleSetNowUser, data, nowUser }: chatPropsInfo): JSX.Element => {
  const [sendMessage, setSendMessage] = useState<string>("");
  const scrollRef: MutableRefObject<any> = useRef(null);
  const [chat, setChat] = useState<requestDataInfo[]>(data);
  const router = useRouter();

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat]);

  useEffect((): any => {
    const socket = SocketIOClient("http://localhost:3000", {
      path: "/api/socketio",
    });

    socket.connect();

    socket.on("connect", () => {
      axios_requestCahtApi(requestData({ message: `${userData.id}님이 입장하였습니다.`, id: userData.id, token: userData.token }));
    });
    socket.on("message", (req: any) => {
      handleSetNowUser(req.nowUser);
      setChat(req.message);
    });
    return () => {
      if (socket) {
        socket.on("disconnect", () => {
          axios_deleteUser(requestData({ message: `${userData.id}님이 퇴장하셨습니다.`, id: userData.id, token: userData.token }));
        });
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const handleExitPage = window.addEventListener("beforeunload", () => {
      axios_deleteUser(requestData({ message: `${userData.id}님이 퇴장하셨습니다.`, id: userData.id, token: userData.token }));
    });
    return () => {
      window.removeEventListener("beforeunload", () => handleExitPage);
    };
  }, [router]);

  const sendMessageHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSendMessage(event.target.value);
    },
    [sendMessage]
  );

  const submitSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (sendMessage) {
      axios_requestCahtApi(requestData({ message: sendMessage, id: userData.id, token: userData.token }));
      setSendMessage("");
    }
  };

  const requestData = ({ message, id, token }: requestDataInfo) => {
    return {
      id: id || "anonymous user",
      message: message,
      date: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
      token: token,
    };
  };

  const handleLogOut = () => {
    deleteCookie("userData");
    router.push("/");
  };
  return (
    <>
      <StyledChatWrapper>
        <section>
          <StyledEnteredUserNumberBar>
            현재 접속자: {nowUser.length} 명<StyledChatLogOutBar onClick={() => handleLogOut()}>로그아웃</StyledChatLogOutBar>
          </StyledEnteredUserNumberBar>
          <StyledChatContainer ref={scrollRef}>
            {chat?.map((e, idx: number) => (
              <div key={`chatBar-${idx}`}>
                <StyledChatBar isYou={e.id !== userData.id}>
                  <div>{e.id}</div>
                  <div>{e.message}</div>
                </StyledChatBar>
                <StyledChatDateBar isYou={e.id !== userData.id}>{e.date}</StyledChatDateBar>
              </div>
            ))}
          </StyledChatContainer>
        </section>
        <ChatUser userList={userList || [userData]} nowUser={nowUser} />
      </StyledChatWrapper>
      <form onSubmit={(event) => submitSendMessage(event)}>
        <StyledSendMessageBar>
          <CustomInput type={"text"} value={sendMessage} onChange={sendMessageHandler} />
          <CustomButton onClick={() => {}} size="small">
            전송
          </CustomButton>
        </StyledSendMessageBar>
      </form>
    </>
  );
};
export default Chat;
