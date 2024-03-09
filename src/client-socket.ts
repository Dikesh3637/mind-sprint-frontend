import { io } from "socket.io-client";

// Replace "http://localhost:3000" with the actual URL where your socket.io server is running
const socket = io("http://localhost:3000");

export const adminNamespace = io("http://localhost:3000/admin-dash");

export const answerNamespace = io("http://localhost:3000/answer");

export default socket;
