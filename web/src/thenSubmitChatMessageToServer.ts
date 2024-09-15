import { Data } from "./Data";
import { runSendMessageToServer } from "./runSendMessageToServer";

export function thenSubmitChatMessageToServer(message: string, data: Data) {
	if (data.user) {
		runSendMessageToServer(
			data.socket,
			data.user.id,
			data.user.username,
			message,
		);
	}
}
