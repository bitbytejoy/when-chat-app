export function runFindChatMessageListInChatElement(
	chatElement: Element
): Element {
	const chatMessageList = chatElement.querySelector(
		'[data-key="chat-message-list"]'
	);

	if (chatMessageList instanceof Element) {
		return chatMessageList;
	}

	throw new Error("chat-message-list not found inside of chat element");
}
