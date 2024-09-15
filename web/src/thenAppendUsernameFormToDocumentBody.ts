import { Data } from "./Data";
import { runAppendToDocumentBody } from "./runAppendToDocumentBody";

export function thenAppendUsernameFormToDocumentBody(data: Data): void {
	runAppendToDocumentBody(data.usernameForm);
}
