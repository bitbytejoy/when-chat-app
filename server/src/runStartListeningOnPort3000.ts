import { Server } from "http";
import { runLog } from "./runLog";

export function runStartListeningOnPort3000(server: Server) {
	server.listen(3000, () => {
		runLog("server running at http://localhost:3000");
	});
}
