import { Data } from "./Data";
import { thenAppendUsernameFormToDocumentBody } from "./thenAppendUsernameFormToDocumentBody";
import { thenListenToLoginMessagesFromTheWebSocketServer } from "./thenListenToLoginMessagesFromTheWebSocketServer";
import { whenChatMessage403 } from "./whenChatMessage403Received";
import { whenChatMessageReceived } from "./whenChatMessageReceived";
import { whenServerErrorMessageReceived } from "./whenServerErrorMessageReceived";

export function whenAppStart(data: Data): void {
	thenAppendUsernameFormToDocumentBody(data);
	thenListenToLoginMessagesFromTheWebSocketServer(data);
	thenListenToChatMessagesFromTheWebSocketServer(data);
}

function thenListenToChatMessagesFromTheWebSocketServer(data: Data): void {
	data.socket.on("message", (status: number, username: string, message: string) => {
		if (status === 200) {
			whenChatMessageReceived(username, message, data);
		} else if (status === 403) {
			whenChatMessage403(data);
		} else {
			whenServerErrorMessageReceived(data);
		}
	});
}
