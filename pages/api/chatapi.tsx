import { Socket } from "net";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiRequest, NextApiResponse } from "next";
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
      const message = req.body;
      const userNumber = res.socket.server.io?.sockets.adapter.rooms.size;
      const user = res.socket.server.io?.sockets.adapter.rooms;
      const userHisotory = updateUserHistory(user, message.id);

      res.socket.server.io.emit("message", { message: message, userNumber: userNumber, id: message.id, userList: userHisotory });
      res.status(201).json(message);
    } catch (e) {
      console.error(e);
    }
  }
};
