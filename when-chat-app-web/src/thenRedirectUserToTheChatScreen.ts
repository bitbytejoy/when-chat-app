import { Data } from "./Data";
import { runAppendChatToDocumentBody } from "./runAppendChatToDocumentBody";
import { runCreateChatElement } from "./runCreateChatElement";
import { runRemoveUsernameFormFromDocumentBody } from "./runRemoveUsernameFormFromDocumentBody";

export function thenRedirectUserToTheChatScreen(data: Data) {
	runRemoveUsernameFormFromDocumentBody(data.usernameForm);
	const chat = runCreateChatElement();
	runAppendChatToDocumentBody(chat);
}
