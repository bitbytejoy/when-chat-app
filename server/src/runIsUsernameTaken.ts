export function runIsUsernameTaken(usernames: Set<string>, username: string): boolean {
    return usernames.has(username);
}
