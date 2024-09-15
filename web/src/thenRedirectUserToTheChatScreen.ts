import { Data } from "./Data";
import { runAppendChatToDocumentBody } from "./runAppendChatToDocumentBody";
import { runCreateChatElement } from "./runCreateChatElement";
import { runRemoveUsernameFormFromDocumentBody } from "./runRemoveUsernameFormFromDocumentBody";
import { whenChatMessageSubmitted } from "./whenChatMessageSubmitted";

export function thenRedirectUserToTheChatScreen(data: Data) {
	runRemoveUsernameFormFromDocumentBody(data.usernameForm);

	const chat = runCreateChatElement((message: string) => {
		whenChatMessageSubmitted(message, data);
	});

	runAppendChatToDocumentBody(chat);
}
