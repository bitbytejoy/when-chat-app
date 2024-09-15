import { Data } from "./Data";
import { thenAppendChatMessageToMessageList } from "./thenAppendChatMessageToMessageList";

export function whenChatMessageReceived(
	username: string,
	message: string,
	data: Data
) {
	thenAppendChatMessageToMessageList(username, message, data);
}
