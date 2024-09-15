import { Socket } from "socket.io";
import { Data } from "./Data";
import { User } from "./User";

export function whenLoginMessageReceived(
	socket: Socket,
	username: string,
	data: Data
) {
	thenLoginUser(socket, username, data);
}

function thenLoginUser(socket: Socket, username: string, data: Data) {
	const usernameTaken = data.usernames.has(username);

	if (usernameTaken) {
		socket.emit("login", 409);
	} else {
		const user: User = {
			id: crypto.randomUUID(),
			username: username,
		};

		data.users.set(user.id, user);
		data.usernames.add(username);

		socket.emit("login", 200, user.id, username);
	}
}
