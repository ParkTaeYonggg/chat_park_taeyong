import { userInfo } from "./commonInfo";

export interface chatPropsInfo {
  userData: userInfo;
  userList: userInfo[];
  handleSetUserList: Function;
}

export interface requestDataInfo {
  id?: string;
  message: string;
  date?: string;
}
