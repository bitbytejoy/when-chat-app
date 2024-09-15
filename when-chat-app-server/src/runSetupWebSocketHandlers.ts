import { Server, Socket } from "socket.io";

export function runSetupWebSocketHandlers(
	io: Server,
	onUserConnects: (socket: Socket) => void,
	onLoginMessage: (socket: Socket, username: string) => void
): void {
	io.on("connection", (socket) => {
		onUserConnects(socket);

		socket.on("login", (username) => {
			onLoginMessage(socket, username);
		});
	});
}
