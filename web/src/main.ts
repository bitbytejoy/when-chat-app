import "./style.css";
import { whenAppStart } from "./whenAppStart";
import { Data } from "./Data";
import { runConnectToTheWebSocketServer } from "./runConnectToTheWebSocketServer";
import { runCreateUsernameForm } from "./runCreateUsernameForm";
import { whenUsernameSubmitted } from "./whenUsernameSubmitted";

function main(): void {
	const data: Data = {
		socket: runConnectToTheWebSocketServer(),
		usernameForm: runCreateUsernameForm((username: string) => {
			whenUsernameSubmitted(username, data);
		}),
		user: undefined,
	};

	whenAppStart(data);
}

main();
