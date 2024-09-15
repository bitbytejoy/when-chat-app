import { Socket } from "socket.io-client";

export function runSendUsernameToWebSocketServer(
	socket: Socket,
	username: string
): void {
	socket.emit("login", username);
}
