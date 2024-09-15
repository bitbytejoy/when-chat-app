import { Socket } from "socket.io";
import { Data } from "./Data";
import { thenBroadcastMessageToAllUsers } from "./thenBroadcastMessageToAllUsers";

export function whenChatMessageReceived(
	socket: Socket,
	userId: string,
	username: string,
	message: string,
	data: Data
): void {
	thenBroadcastMessageToAllUsers(socket, userId, username, message, data);
}
