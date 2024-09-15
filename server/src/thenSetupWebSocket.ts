import { Socket } from "socket.io";
import { Data } from "./Data";
import { runSetupWebSocketHandlers } from "./runSetupWebSocketHandlers";
import { whenLoginMessageReceived } from "./whenLoginMessageReceived";
import { whenUserConnected } from "./whenUserConnected";
import { User } from "./User";
import { whenChatMessageReceived } from "./whenChatMessageReceived";

export function thenSetupWebSocket(data: Data) {
	runSetupWebSocketHandlers(
		data.io,
		(socket: Socket) => whenUserConnected(socket, data),
		(socket: Socket, username: string) => {
			whenLoginMessageReceived(socket, username, data);
		},
		(socket: Socket, userId: string, username: string, message: string) => {
			whenChatMessageReceived(socket, userId, username, message, data);
		}
	);
}
