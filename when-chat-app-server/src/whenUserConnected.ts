import { Socket } from "socket.io";
import { Data } from "./Data";

export function whenUserConnected(socket: Socket, data: Data): void {
	console.log("A user connected");
}
