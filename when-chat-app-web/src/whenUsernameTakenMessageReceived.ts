import { Data } from "./Data";
import { thenRenderUsernameTakenErrorMessageInTheUsernameForm } from "./thenRenderUsernameTakenErrorMessageInTheUsernameForm";

export function whenUsernameTakenMessageReceived(data: Data): void {
	thenRenderUsernameTakenErrorMessageInTheUsernameForm(data);
}
