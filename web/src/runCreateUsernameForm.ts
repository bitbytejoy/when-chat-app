import { runCreateElement } from "./runCreateElement";
import { runFindUsernameInputInUsernameForm } from "./runFindUsernameInputInUsernameForm";
import { runFindFormInUsernameForm } from "./runFindFormInUsernameForm";

export function runCreateUsernameForm(
	onSubmit: (username: string) => void
): Element {
	const usernameForm = runCreateElement(`
		<div style="display: grid; place-items: center; height: 100vh; overflow: hidden;">
			<form>
				<div>
					<label>
						Username
						<input name="username">
					</label>
				</div>

				<div>
					<button>START</buton>
				</div>
			</form>
		</div>
	`);

	const usernameInput = runFindUsernameInputInUsernameForm(usernameForm);
	const form = runFindFormInUsernameForm(usernameForm);

	form.onsubmit = (e) => {
		e.preventDefault();

		const username = usernameInput.value;

		onSubmit(username);
	};

	return usernameForm;
}
