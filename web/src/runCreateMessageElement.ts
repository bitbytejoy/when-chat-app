import { runCreateElement } from "./runCreateElement";

export function runCreateMessageElement(
	username: string,
	message: string
): Element {
	return runCreateElement(`
		<div style="padding: 1rem 0.75rem;">
			<div>
				<b>${username}:</b>
			</div>

			<div>
				<span>${message}</span>
			</div>
		</div>
	`);
}
