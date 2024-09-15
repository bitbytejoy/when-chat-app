import { Socket } from "socket.io-client";

export function runSendMessageToServer(socket: Socket, userId: string, username: string, message: string) {
    socket.emit("message", userId, username, message);
}
