import { Data } from "./Data";
import { thenRedirectUserToTheChatScreen } from "./thenRedirectUserToTheChatScreen";
import { thenSaveUserIdAndUsernameToData } from "./thenSaveUserIdAndUsernameToData";
import { thenSaveUserIdAndUsernameToLocalStorage } from "./thenSaveUserIdAndUsernameToLocalStorage";

export function whenLoginSuccessMessageReceived(
	userId: string,
	username: string,
	data: Data
) {
	thenSaveUserIdAndUsernameToLocalStorage(userId, username, data);
	thenSaveUserIdAndUsernameToData(userId, username, data);
	thenRedirectUserToTheChatScreen(data);
}
