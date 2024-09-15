import { Data } from "./Data";
import { TypeUser } from "./TypeUser";

export function thenSaveUserIdAndUsernameToData(
	userId: string,
	username: string,
	data: Data
): void {
	const user: TypeUser = {
		id: userId,
		username: username,
	};

	data.user = user;
}
