import { Data } from "./Data";
import { runSaveUserIdToLocalStorage } from "./runSaveUserIdToLocalStorage";
import { runSaveUsernameToLocalStorage } from "./runSaveUsernameToLocalStorage";

export function thenSaveUserIdAndUsernameToLocalStorage(
	userId: string,
	username: string,
	_data: Data
) {
	runSaveUserIdToLocalStorage(userId);
	runSaveUsernameToLocalStorage(username);
}
