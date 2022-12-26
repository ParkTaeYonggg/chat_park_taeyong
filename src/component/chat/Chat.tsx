import { chatPropsInfo, requestDataInfo } from "../../interface/chatInfo";
import {
  StyledChatBar,
  StyledChatContainer,
  StyledChatDateBar,
  StyledChatWrapper,
  StyledEnteredUserNumberBar,
  StyledSendMessageBar,
} from "../../styles/chat/StyledChat";
import SocketIOClient from "socket.io-client";
import ChatUser from "./ChatUser";
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import CustomInput from "../../common/CustomInput";
import CustomButton from "../../common/CustomButton";
import moment from "moment";
import Link from "next/link";
import axios_requestCahtApi from "../../fetcher/axios_requestChat";
import axios_deleteUser from "../../fetcher/axios_deleteUser";

const Chat = ({ userData, userList, handleSetUserList }: chatPropsInfo): JSX.Element => {
  const [sendMessage, setSendMessage] = useState<string>("");
  const scrollRef: MutableRefObject<any> = useRef(null);
  const [chat, setChat] = useState<{ message: string; id: string; date: string }[]>([]);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat]);

  useEffect((): any => {
    const socket = SocketIOClient("http://localhost:3000", {
      path: "/api/socketio",
    });

    socket.connect();

    socket.on("connect", () => {
      axios_requestCahtApi(requestData({ message: `${userData.id}님이 입장하였습니다.`, id: userData.id }));
    });
    socket.on("message", (req: any) => {
      chat.push(req.message);
      handleSetUserList(req.userList);
      setChat([...chat]);
    });

    return () => {
      if (socket) {
        if (socket.connected) {
          axios_deleteUser(requestData({ message: `${userData.id}님이 퇴장하셨습니다.`, id: userData.id }));
        }
        socket.disconnect();
      }
    };
  }, []);

  const sendMessageHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSendMessage(event.target.value);
    },
    [sendMessage]
  );

  const submitSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (sendMessage) {
      axios_requestCahtApi(requestData({ message: sendMessage, id: userData.id }));
      setSendMessage("");
    }
  };

  const requestData = ({ message, id }: requestDataInfo) => {
    return {
      id: id || "anonymous user",
      message: message,
      date: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
    };
  };

  return (
    <>
      <StyledChatWrapper>
        <section>
          <StyledEnteredUserNumberBar>
            총 입장 수 : {userList.length} 명<Link href={"/"}>로그아웃</Link>
          </StyledEnteredUserNumberBar>
          <StyledChatContainer ref={scrollRef}>
            {chat.map((e, idx: number) => (
              <div key={`chatBar-${e.id + idx}`}>
                <StyledChatBar isYou={e.id !== userData.id}>
                  <div>{e.id}</div>
                  <div>{e.message}</div>
                </StyledChatBar>
                <StyledChatDateBar isYou={e.id !== userData.id}>{e.date}</StyledChatDateBar>
              </div>
            ))}
          </StyledChatContainer>
        </section>
        <ChatUser userList={userList || [userData]} />
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
