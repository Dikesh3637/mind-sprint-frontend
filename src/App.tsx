import socket, { adminNamespace } from "./client-socket";
import { LoginPage } from "./components/LoginPage";
import { WaitingPage } from "./components/WaitingPage";
import { ParticipantsAnswerPage } from "./components/ParticipantsAnswerPage";
import { AdminDashboard } from "./components/AdminDashboard";
import { AdminLogin } from "./components/AdminLogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JoinScreen } from "./components/JoinScreen";
import { LeaderBoard } from "./components/LeaderBoard";
import { useEffect } from "react";
import { QuestionDashboard } from "./components/QuestionDashboard";
import { EndScreen } from "./components/EndScreen";
import Cookies from "js-cookie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/admin-login",
    element: <AdminLogin />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },

  {
    path: "/join-screen",
    element: <JoinScreen />,
  },
  {
    path: "/question",
    element: <QuestionDashboard />,
  },
  {
    path: "/leader",
    element: <LeaderBoard />,
  },
  {
    path: "/answer",
    element: <ParticipantsAnswerPage />,
  },
  {
    path: "/wait",
    element: <WaitingPage />,
  },
  {
    path: "/end-screen",
    element: <EndScreen />,
  },
]);

function App() {
  // Emit an event to the server
  socket.emit("hello", "world");

  // connection using the inQuiz cookie
  const inQuiz = Cookies.get("inQuiz");
  socket.emit("connectToQuiz", { inQuiz });

  //adminNamespace
  adminNamespace.emit("hello", "world");

  useEffect(() => {
    socket.on("message", (data) => {
      console.log("Server says:", data);
    });

    return () => {
      socket.off("message");
    };
  }, []);
  // Listen for messages from the server

  return <RouterProvider router={router} />;
}

export default App;
