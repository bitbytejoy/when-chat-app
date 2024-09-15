import "./style.css";
import { whenAppStart } from "./whenAppStart";
import { Data } from "./Data";
import { runConnectToTheWebSocketServer } from "./runConnectToTheWebSocketServer";
import { runCreateUsernameForm } from "./runCreateUsernameForm";
import { whenUsernameSubmitted } from "./whenUsernameSubmitted";
import { runCreateChatElement } from "./runCreateChatElement";
import { whenChatMessageSubmitted } from "./whenChatMessageSubmitted";

function main(): void {
	const data: Data = {
		socket: runConnectToTheWebSocketServer(),
		usernameForm: runCreateUsernameForm((username: string) => {
			whenUsernameSubmitted(username, data);
		}),
		user: undefined,
		chatElement: runCreateChatElement((message: string) => {
			whenChatMessageSubmitted(message, data);
		}),
	};

	whenAppStart(data);
}

main();
