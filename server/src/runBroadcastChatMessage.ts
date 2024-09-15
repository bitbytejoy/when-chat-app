import socket from "socket.io";

export function runBroadcastChatMessage(
	io: socket.Server,
	username: string,
	message: string
): void {
	io.emit("message", 200, username, message);
}
