import { Data } from "./Data";
import { thenSubmitChatMessageToServer } from "./thenSubmitChatMessageToServer";

export function whenChatMessageSubmitted(message: string, data: Data) {
	thenSubmitChatMessageToServer(message, data);
}
