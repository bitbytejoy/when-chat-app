import { Server, Socket } from "socket.io";

export function runSetupWebSocketHandlers(
	io: Server,
	onUserConnects: (socket: Socket) => void,
	onLoginMessage: (socket: Socket, username: string) => void,
	onChatMessageReceived: (
		socket: Socket,
		userId: string,
		username: string,
		message: string,
	) => void,
): void {
	io.on("connection", (socket) => {
		onUserConnects(socket);

		socket.on("login", (username: string) => {
			onLoginMessage(socket, username);
		});

		socket.on(
			"message",
			(userId: string, username: string, message: string) => {
				onChatMessageReceived(socket, userId, username, message);
			},
		);
	});
}
