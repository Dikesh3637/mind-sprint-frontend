import { io } from "socket.io-client";

// Replace "http://localhost:3000" with the actual URL where your socket.io server is running
const socket = io("https://mind-sprint-server.onrender.com");

export const adminNamespace = io(
  "https://mind-sprint-server.onrender.com/admin-dash"
);

export const answerNamespace = io(
  "https://mind-sprint-server.onrender.com/answer"
);

export default socket;
