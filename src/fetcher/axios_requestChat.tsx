import axios from "axios";
import { requestDataInfo } from "../interface/chatInfo";

const axios_requestCahtApi = async (requestData: requestDataInfo) => {
  await axios.post("/api/chatapi", requestData);
};

export default axios_requestCahtApi;
