import { Data } from "./Data";
import { whenChatMessage403 } from "./whenChatMessage403Received";
import { whenChatMessageReceived } from "./whenChatMessageReceived";
import { whenServerErrorMessageReceived } from "./whenServerErrorMessageReceived";

export function thenListenToChatMessagesFromTheWebSocketServer(
	data: Data
): void {
	data.socket.on(
		"message",
		(status: number, username: string, message: string) => {
			if (status === 200) {
				whenChatMessageReceived(username, message, data);
			} else if (status === 403) {
				whenChatMessage403(data);
			} else {
				whenServerErrorMessageReceived(data);
			}
		}
	);
}
