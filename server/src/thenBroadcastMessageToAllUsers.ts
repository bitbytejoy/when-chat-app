import { Socket } from "socket.io";
import { Data } from "./Data";
import { runUserIdAndUsernameAreValid } from "./runAreUserIdAndUsernameValid";
import { runRespondWithChatMessage403 } from "./runRespondWithChatMessage403";
import { runBroadcastChatMessage } from "./runBroadcastChatMessage";

export function thenBroadcastMessageToAllUsers(
	socket: Socket,
	userId: string,
	username: string,
	message: string,
	data: Data
) {
	if (runUserIdAndUsernameAreValid(data.users, userId, username)) {
		runBroadcastChatMessage(data.io, username, message);
	} else {
		runRespondWithChatMessage403(socket);
	}
}
