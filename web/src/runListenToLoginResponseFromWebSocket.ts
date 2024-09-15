import { Socket } from "socket.io-client";

export function runListenToLoginResponseFromWebSocket(
	socket: Socket,
	onSuccess: (userId: string, username: string) => void,
	onUsernameTaken: () => void,
	onServerError: () => void
): void {
	socket.on(
		"login",
		(
			status: number,
			userId: undefined | string,
			username: undefined | string
		) => {
			if (status === 409) {
				onUsernameTaken();
			} else if (userId && username) {
				onSuccess(userId, username);
			} else {
				onServerError();
			}
		}
	);
}
