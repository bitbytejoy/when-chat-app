export function runSaveUsernameToLocalStorage(username: string): void {
	localStorage.setItem("username", username);
}
