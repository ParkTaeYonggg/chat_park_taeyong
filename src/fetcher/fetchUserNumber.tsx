import axios from "axios";

export const fetchUserNumber = async (callback: Function): Promise<void> => {
  await axios.post("/api/getUserNumber").then((res) => {
    callback(res.data);
  });
};
