import { Data } from "./Data";
import { runRenderUsernameTakenErrorMessageInTheUsernameForm } from "./runRenderUsernameTakenErrorMessageInTheUsernameForm";

export function thenRenderUsernameTakenErrorMessageInTheUsernameForm(
	data: Data
) {
	runRenderUsernameTakenErrorMessageInTheUsernameForm(data.usernameForm);
}
