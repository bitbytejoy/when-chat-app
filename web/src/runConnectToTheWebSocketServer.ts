import { io, Socket } from "socket.io-client";

export function runConnectToTheWebSocketServer(): Socket {
	return io("ws://localhost:3000");
}
