import { Socket } from "socket.io";
import { Data } from "./Data";
import { thenLoginUser } from "./thenLoginUser";

export function whenLoginMessageReceived(
	socket: Socket,
	username: string,
	data: Data
) {
	thenLoginUser(socket, username, data);
}
