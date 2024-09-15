import { User } from "./User";

export function runDoUserIdAndUsernameAlign(
	users: Map<string, User>,
	userId: string,
	username: string
): boolean {
	const user = users.get(userId);
	return !!user && user.username === username;
}
