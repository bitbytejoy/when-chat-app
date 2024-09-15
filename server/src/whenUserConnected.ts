import { Socket } from "socket.io";
import { Data } from "./Data";
import { runLog } from "./runLog";

export function whenUserConnected(_socket: Socket, _data: Data): void {
	runLog("A user connected");
}
