import { Socket } from "socket.io";
import { User } from "./User";

export function runRespondWithLogin200(socket: Socket, user: User): void {
	socket.emit("login", 200, user.id, user.username);
}
