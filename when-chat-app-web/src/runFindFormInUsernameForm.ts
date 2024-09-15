export function runFindFormInUsernameForm(
	usernameForm: Element
): HTMLFormElement {
	const form = usernameForm.querySelector("form");

	if (form instanceof HTMLFormElement) {
		return form;
	}

	throw new Error("UsernameForm does not contain a <form>");
}
