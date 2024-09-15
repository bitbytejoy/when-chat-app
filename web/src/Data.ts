import { Socket } from "socket.io-client";
import { TypeUser } from "./TypeUser";

export type Data = {
	chatElement: Element;
	socket: Socket;
	usernameForm: Element;
	user: undefined | TypeUser;
};
