import axios from "axios";
import { DBURL } from "../constant/url";
import { requestDataInfo } from "../interface/chatInfo";

const axios_requestCahtApi = async (requestData: requestDataInfo) => {
  await Promise.all([axios.post(DBURL, requestData), axios.post("/api/chatapi", requestData)]);
};

export default axios_requestCahtApi;
