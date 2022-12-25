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
    const message = req.body;
    res.socket.server.io.emit("message", message);
    res.status(201).json(message);
  }
};
