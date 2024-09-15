import { Express } from "express-serve-static-core";
import http from "http";
import socket from "socket.io";
import { User } from "./User";

export type Data = {
	app: Express;
	server: http.Server;
	io: socket.Server;
	users: Map<string, User>;
	usernames: Set<string>;
};
