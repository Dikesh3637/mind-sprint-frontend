import socket from "../client-socket";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const WaitingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    socket.on("cancel-quiz", () => {
      console.log("quiz has been cancelled");
      Cookies.set("inQuiz", "false");
      navigate("/");
    });

    socket.on("start-quiz", () => {
      navigate("/answer");
    });

    return () => {
      socket.off("cancel-quiz");
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-[#226ce0] text-center sm:text-[2.125rem] text-[1.2rem] text-[#152c69] h-screen w-screen p-[5rem] font-font-4 ">
      <p>
        "Welcome to the 'Hurry Up and Wait' zone! While we round up the
        procrastinators and the early birds, feel free to ponder life's greatest
        mysteries, like why do round pizzas come in square boxes?"
      </p>
    </div>
  );
};
