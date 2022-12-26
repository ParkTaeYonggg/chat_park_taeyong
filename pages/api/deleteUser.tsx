import { Socket } from "net";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { userInfo } from "../../src/interface/commonInfo";
import updateUserHistory from "../../src/utils/updateUserHistory";
import axios from "axios";
import { DBURL } from "../../src/constant/url";
interface SocketInfo extends NextApiResponse {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO;
    };
  };
}

export default async (req: NextApiRequest, res: SocketInfo) => {
  if (req.method === "POST") {
    try {
      const userData: userInfo = req.body;
      const user = res.socket.server.io?.sockets.adapter.rooms;
      user.delete(userData.id || req.body);
      const message = req.body;
      const { data } = await axios.get(DBURL);
      const dbMessage = Object.values(data);
      const slicedDbMessage = dbMessage.slice(dbMessage.length <= 50 ? 0 : dbMessage.length - 50);
      const userHisotory = updateUserHistory(user, message.id, true);
      res.socket.server.io.emit("message", { message: slicedDbMessage, id: message.id, nowUser: userHisotory });
      res.status(201).json(req.body);
    } catch (e) {
      console.error(e);
    }
  }
};
