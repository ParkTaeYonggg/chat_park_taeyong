import { Socket } from "net";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { userInfo } from "../../src/interface/commonInfo";
import updateUserHistory from "../../src/utils/updateUserHistory";
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
      const userNumber = res.socket.server.io?.sockets.adapter.rooms.size;
      const userHisotory = updateUserHistory(user, message.id, true);
      res.socket.server.io.emit("message", { message: message, userNumber: userNumber, id: message.id, userList: userHisotory });
      res.status(201).json(req.body);
    } catch (e) {
      console.error(e);
    }
  }
};
