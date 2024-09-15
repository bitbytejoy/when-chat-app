import { Data } from "./Data";
import { thenRedirectUserToTheChatScreen } from "./thenRedirectUserToTheChatScreen";
import { thenSaveUserIdAndUsernameToLocalStorage } from "./thenSaveUserIdAndUsernameToLocalStorage";

export function whenLoginSuccessMessageReceived(
	userId: string,
	username: string,
	data: Data
) {
	thenSaveUserIdAndUsernameToLocalStorage(userId, username, data);
	thenRedirectUserToTheChatScreen(data);
}
