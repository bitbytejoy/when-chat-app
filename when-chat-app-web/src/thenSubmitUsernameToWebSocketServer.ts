import { Data } from "./Data";
import { runSendUsernameToWebSocketServer } from "./runSendUsernameToWebSocketServer";

export function thenSubmitUsernameToWebSocketServer(
	username: string,
	data: Data
) {
	runSendUsernameToWebSocketServer(data.socket, username);
}
