import { User } from "firebase/auth";
import { GetServerSideProps } from "next";
import Chat from "../src/component/chat/Chat";
import { userInfo } from "../src/interface/commonInfo";
interface propsInfo {
  userData: userInfo;
}
const ChatHome = ({ userData }: propsInfo): JSX.Element => {
  return <Chat userList={[userData]} />;
};

export default ChatHome;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userData: userInfo & User = JSON.parse(context.req.cookies["userData"] || "");

  return {
    props: {
      userData: userData,
    },
  };
};
