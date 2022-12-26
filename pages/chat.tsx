import axios from "axios";
import { User } from "firebase/auth";
import { GetServerSideProps } from "next";
import { useCallback, useState } from "react";
import Chat from "../src/component/chat/Chat";
import { userInfo } from "../src/interface/commonInfo";
interface propsInfo {
  userData: userInfo;
}
const ChatHome = ({ userData }: propsInfo): JSX.Element => {
  const [userList, setUserList] = useState<userInfo[]>([userData]);
  const handleSetUserList = useCallback(
    (e: userInfo[]) => {
      setUserList(e);
    },
    [userList]
  );
  return <Chat userData={userData} userList={userList} handleSetUserList={handleSetUserList} />;
};

export default ChatHome;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData: userInfo & User = JSON.parse(context.req.cookies["userData"] || JSON.stringify({}));

  return {
    props: {
      userData: userData,
    },
  };
};
