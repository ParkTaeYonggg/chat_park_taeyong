import { NextApiRequest, NextApiResponse } from "next";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { Socket } from "net";

export const config = {
  api: {
    bodyParser: false,
  },
};

interface SocketInfo extends NextApiResponse {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO;
    };
  };
}

export default async (req: NextApiRequest, res: SocketInfo) => {
  if (!res.socket.server.io) {
    console.log("======= ::: 접속 완료 ::: =======");

    const httpServer: NetServer = res.socket.server as any;

    const io = new ServerIO(httpServer, {
      path: "/api/socketio",
    });
    res.socket.server.io = io;
  }

  res.end();
};
