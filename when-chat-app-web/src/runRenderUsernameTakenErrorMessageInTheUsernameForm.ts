import { runCreateElement } from "./runCreateElement";
import { runFindFormInUsernameForm } from "./runFindFormInUsernameForm";

export function runRenderUsernameTakenErrorMessageInTheUsernameForm(
	usernameForm: Element
): void {
	const usernameTakenErrorMessage = runCreateElement(
		`<div style="padding: 1rem 0; color: red;">Username is already taken! Pick another username.</div>`
	);

	const form = runFindFormInUsernameForm(usernameForm);

	form.prepend(usernameTakenErrorMessage);
}
