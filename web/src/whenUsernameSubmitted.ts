import { Data } from "./Data";
import { thenSubmitUsernameToWebSocketServer } from "./thenSubmitUsernameToWebSocketServer";

export function whenUsernameSubmitted(username: string, data: Data) {
	thenSubmitUsernameToWebSocketServer(username, data);
}
