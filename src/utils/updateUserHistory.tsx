import { userInfo } from "../interface/commonInfo";

const updateUserHistory = (chat: Map<any, any>, id: string, isDelete?: boolean) => {
  const filteredUserHistory: userInfo[] = [];
  if (!isDelete) chat.set(id, id);
  chat.forEach((e) => {
    if (String(e).includes("@")) filteredUserHistory.push({ id: e });
  });
  return filteredUserHistory;
};

export default updateUserHistory;
