import { Data } from "./Data";
import { thenSetupRestRoutes } from "./thenSetupRestRoutes";
import { thenSetupWebSocket } from "./thenSetupWebSocket";

export function whenAppStarts(data: Data) {
	thenSetupRestRoutes(data);
	thenSetupWebSocket(data);
}
