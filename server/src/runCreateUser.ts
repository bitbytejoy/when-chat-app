import { User } from "./User";

export function runCreateUser(username: string): User {
    return {
        id: crypto.randomUUID(),
        username: username,
    };
}
