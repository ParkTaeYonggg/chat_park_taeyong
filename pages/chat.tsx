import axios from "axios";
import { User } from "firebase/auth";
import { GetServerSideProps } from "next";
import { useCallback, useState } from "react";
import Chat from "../src/component/chat/Chat";
import { DBURL, USERDBURL } from "../src/constant/url";
import { requestDataInfo } from "../src/interface/chatInfo";
import { userInfo } from "../src/interface/commonInfo";
interface propsInfo {
  userData: userInfo;
  data: requestDataInfo[];
  userList: userInfo[];
}
const ChatHome = ({ userData, data, userList }: propsInfo): JSX.Element => {
  const [nowUser, setNowUser] = useState<userInfo[]>([]);
  const handleSetNowUser = useCallback(
    (e: userInfo[]) => {
      setNowUser(e);
    },
    [userList]
  );
  console.info("유저리스트 : ", userList);
  return <Chat userData={userData} data={data} userList={userList} handleSetNowUser={handleSetNowUser} nowUser={nowUser} />;
};

export default ChatHome;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData: userInfo & User = JSON.parse(context.req.cookies["userData"] || JSON.stringify({}));
  const userList: { user: userInfo[] } = await (await axios.get(USERDBURL)).data;
  const { data } = await axios.get(DBURL);

  return {
    props: {
      userData: userData,
      userList: Object.values(userList),
      data: Object.values(data).slice(Object.values(data).length < 50 ? 0 : Object.values(data).length - 50),
    },
  };
};
