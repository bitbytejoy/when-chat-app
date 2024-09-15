import { runFindChatMessageListInChatElement } from "./runFindChatMessageListInChatElement";

export function runAppendMessageElementToChat(
	chatElement: Element,
	messageElement: Element
): void {
	const chatMessageList = runFindChatMessageListInChatElement(chatElement);
	chatMessageList.append(messageElement);
}
