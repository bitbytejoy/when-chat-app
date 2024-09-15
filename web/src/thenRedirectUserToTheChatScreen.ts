import { Data } from "./Data";
import { runAppendChatToDocumentBody } from "./runAppendChatToDocumentBody";
import { runRemoveUsernameFormFromDocumentBody } from "./runRemoveUsernameFormFromDocumentBody";

export function thenRedirectUserToTheChatScreen(data: Data) {
	runRemoveUsernameFormFromDocumentBody(data.usernameForm);
	runAppendChatToDocumentBody(data.chatElement);
}
