import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { whenAppStarts } from "./whenAppStarts";
import { Data } from "./Data";
import { User } from "./User";

function main() {
	const app = express();
	const server = createServer(app);
	const io = new Server(server, {
		cors: {
			origin: ["http://localhost:5173"],
		},
	});

	const data: Data = {
		app: app,
		server: server,
		io: io,
		users: new Map<string, User>(),
		usernames: new Set<string>(),
	};

	whenAppStarts(data);
}

main();
