export function runFindUsernameInputInUsernameForm(
	usernameForm: Element
): HTMLInputElement {
	const usernameInput = usernameForm.querySelector('[name="username"]');

	if (usernameInput instanceof HTMLInputElement) {
		return usernameInput;
	}

	throw new Error(`UsernameForm does not contain an <input name="username">`);
}
