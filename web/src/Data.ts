import { Socket } from "socket.io-client";

export type Data = {
	socket: Socket;
	usernameForm: Element;
};
