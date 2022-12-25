import { chatUserPropsInfo } from "../../interface/chatInfo";
import { StyledChatWrapper } from "../../styles/chat/StyledChat";
import SocketIOClient from "socket.io-client";
import ChatUser from "./ChatUser";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { fetchUserNumber } from "../../fetcher/fetchUserNumber";

const Chat = ({ userList }: chatUserPropsInfo): JSX.Element => {
  const [sendMessage, setSendMessage] = useState<string>("");
  const [userNumber, setUserNumber] = useState<number>(0);
  const [chat, setChat] = useState<{ message: string; user: string }[]>([]);

  useEffect((): any => {
    const socket = SocketIOClient("http://localhost:3000", {
      path: "/api/socketio",
    });
    socket.connect();
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket);
      fetchUserNumber(setUserNumber);
    });

    socket.on("message", (message: any) => {
      chat.push(message);
      setChat([...chat]);
    });

    if (socket) return () => socket.disconnect();
  }, []);

  const sendMessageHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSendMessage(event.target.value);
    },
    [sendMessage]
  );

  const submitSendMessage = async () => {
    // event.preventDefault();
    if (sendMessage) {
      const message: { user: string; message: string } = {
        user: userList[0].id || "anonymous user",
        message: sendMessage,
      };
      chat.push(message);
      setChat([...chat]);
      const response = await axios.post("/api/chatapi", message);

      setSendMessage("");
    }
  };

  return (
    <StyledChatWrapper>
      <span>총 입장 수 : {userNumber} 명</span>
      <ChatUser userList={userList} />
      {chat.map((e, idx: number) => (
        <React.Fragment key={e.user + idx}>
          <div>{e.user}</div>
          <div>{e.message}</div>
        </React.Fragment>
      ))}
      <input type={"text"} value={sendMessage} onChange={(e) => sendMessageHandler(e)} />
      <button onClick={() => submitSendMessage()}>전송</button>
    </StyledChatWrapper>
  );
};
export default Chat;
