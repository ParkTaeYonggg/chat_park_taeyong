import { Socket } from "net";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiRequest, NextApiResponse } from "next";
interface SocketInfo extends NextApiResponse {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO;
    };
  };
}

export default async (req: NextApiRequest, res: SocketInfo) => {
  if (req.method === "POST") {
    const userNumber = res.socket.server.io.sockets.adapter.rooms.size;
    res.socket.server.io.emit("userNumber", userNumber);
    res.status(201).json(userNumber);
  }
};
