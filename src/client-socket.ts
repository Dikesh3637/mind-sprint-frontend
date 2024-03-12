import { io } from "socket.io-client";

// Replace "http://localhost:3000" with the actual URL where your socket.io server is running
// const socketServer =
//   import.meta.env.NODE_ENV === "development"
//     ? "http://localhost:10000"
//     : "https://mind-sprint-server.onrender.com";

// const socket = io(`http://localhost:10000`);
// export const adminNamespace = io(`http://localhost:10000/admin-dash`);
// export const answerNamespace = io(`http://localhost:10000/answer`);

const socket = io(`https://mind-sprint-server.onrender.com`);
//
export const adminNamespace = io(
  `https://mind-sprint-server.onrender.com/admin-dash`
);
//
export const answerNamespace = io(
  `https://mind-sprint-server.onrender.com/answer`
);

export default socket;
