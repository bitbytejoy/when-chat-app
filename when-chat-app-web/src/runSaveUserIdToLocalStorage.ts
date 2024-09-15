export function runSaveUserIdToLocalStorage(userId: string): void {
	localStorage.setItem("userId", userId);
}
