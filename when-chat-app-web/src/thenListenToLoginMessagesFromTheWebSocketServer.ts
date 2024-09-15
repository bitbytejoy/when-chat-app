import { Data } from "./Data";
import { whenServerErrorMessageReceived } from "./whenServerErrorMessageReceived";
import { whenUsernameTakenMessageReceived } from "./whenUsernameTakenMessageReceived";
import { runListenToLoginResponseFromWebSocket } from "./runListenToLoginResponseFromWebSocket";
import { whenLoginSuccessMessageReceived } from "./whenLoginSuccessMessageReceived";

export function thenListenToLoginMessagesFromTheWebSocketServer(data: Data) {
	runListenToLoginResponseFromWebSocket(
		data.socket,
		(userId, username) => {
			whenLoginSuccessMessageReceived(userId, username, data);
		},
		() => whenUsernameTakenMessageReceived(data),
		() => whenServerErrorMessageReceived(data)
	);
}
