import { User } from "./User";

export function runDoesUserExist(
	users: Map<string, User>,
	userId: string
): boolean {
	return users.has(userId);
}
