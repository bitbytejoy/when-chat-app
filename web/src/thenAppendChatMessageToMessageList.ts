import { Data } from "./Data";
import { runAppendMessageElementToChat } from "./runAppendMessageElementToChat";
import { runCreateMessageElement } from "./runCreateMessageElement";

export function thenAppendChatMessageToMessageList(
	username: string,
	message: string,
	data: Data
) {
	const messageElement = runCreateMessageElement(username, message);
	runAppendMessageElementToChat(data.chatElement, messageElement);
}
