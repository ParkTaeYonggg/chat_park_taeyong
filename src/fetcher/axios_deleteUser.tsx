import axios from "axios";
import { DBURL } from "../constant/url";
import { requestDataInfo } from "../interface/chatInfo";

const axios_deleteUser = async (requestData: requestDataInfo) => {
  await Promise.all([axios.post(DBURL, requestData), axios.post("/api/deleteUser", requestData)]);
};

export default axios_deleteUser;
