import { Socket } from "socket.io-client";
import { TypeUser } from "./TypeUser";

export type Data = {
	socket: Socket;
	usernameForm: Element;
	user: undefined | TypeUser;
};
