import { Socket } from "socket.io";

export function runRespondWithChatMessage403(socket: Socket): void {
	socket.emit("message", 403);
}
