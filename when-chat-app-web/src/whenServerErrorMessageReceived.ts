import { Data } from "./Data";
import { thenAlertServerError } from "./thenAlertServerError";

export function whenServerErrorMessageReceived(data: Data): void {
	thenAlertServerError(data);
}
