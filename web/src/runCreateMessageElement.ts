import { runCreateElement } from "./runCreateElement";

export function runCreateMessageElement(username: string, message: string): Element {
    return runCreateElement(`
		<div>
			<div>
				<b>${username}:</b>
			</div>

			<div>
				<span>${message}</span>
			</div>
		</div>
	`);
}
