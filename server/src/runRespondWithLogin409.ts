import { Socket } from "socket.io";

export function runRespondWithLogin409(socket: Socket): void {
	socket.emit("login", 409);
}
