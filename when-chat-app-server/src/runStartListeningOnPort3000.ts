import { Server } from "http";

export function runStartListeningOnPort3000(server: Server) {
	server.listen(3000, () => {
		console.log("server running at http://localhost:3000");
	});
}
