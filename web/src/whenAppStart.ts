import { Data } from "./Data";
import { thenAppendUsernameFormToDocumentBody } from "./thenAppendUsernameFormToDocumentBody";
import { thenListenToLoginMessagesFromTheWebSocketServer } from "./thenListenToLoginMessagesFromTheWebSocketServer";

export function whenAppStart(data: Data): void {
	thenAppendUsernameFormToDocumentBody(data);
	thenListenToLoginMessagesFromTheWebSocketServer(data);
}
