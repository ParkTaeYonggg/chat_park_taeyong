import { userInfo } from "./commonInfo";

export interface chatPropsInfo {
  userData: userInfo;
  userList: userInfo[];
  handleSetNowUser: Function;
  data: requestDataInfo[];
  nowUser: userInfo[];
}

export interface requestDataInfo {
  id?: string;
  message: string;
  date?: string;
  token?: string;
}
