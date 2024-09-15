import { Data } from "./Data";
import { runAlertServerError } from "./runAlertServerError";

export function thenAlertServerError(_data: Data) {
	runAlertServerError();
}
