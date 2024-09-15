import { Socket } from "socket.io";
import { Data } from "./Data";
import { runCreateUser } from "./runCreateUser";
import { runIsUsernameTaken } from "./runIsUsernameTaken";
import { runLog } from "./runLog";
import { runRespondWithLogin200 } from "./runRespondWithLogin200";
import { runRespondWithLogin409 } from "./runRespondWithLogin409";

export function thenLoginUser(socket: Socket, username: string, data: Data) {
	runLog("Login message received with username", username);

	const usernameTaken = runIsUsernameTaken(data.usernames, username);

	if (usernameTaken) {
		runLog("Username taken");

		runRespondWithLogin409(socket);
	} else {
		const user = runCreateUser(username);

		runLog("User logged in, with data", user);

		data.users.set(user.id, user);
		data.usernames.add(username);

		runRespondWithLogin200(socket, user);
	}
}
