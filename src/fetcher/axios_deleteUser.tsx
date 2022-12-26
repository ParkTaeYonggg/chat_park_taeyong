import axios from "axios";
import { requestDataInfo } from "../interface/chatInfo";

const axios_deleteUser = async (requestData: requestDataInfo) => {
  await axios.post("/api/deleteUser", requestData);
};

export default axios_deleteUser;
