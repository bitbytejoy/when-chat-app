import { runDoesUserExist } from "./runDoesUserExist";
import { runDoUserIdAndUsernameAlign } from "./runDoUserIdAndUsernameAlign";
import { User } from "./User";

export function runUserIdAndUsernameAreValid(
	users: Map<string, User>,
	userId: string,
	username: string
): boolean {
	return (
		runDoesUserExist(users, userId) &&
		runDoUserIdAndUsernameAlign(users, userId, username)
	);
}
