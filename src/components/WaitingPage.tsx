import socket from "../client-socket";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect } from "react";

export const WaitingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // if (Cookies.get("inQuiz") === "true") {
    //   socket.emit("connectToQuiz", { inQuiz: "true" });
    // }

    socket.on("cancel-quiz", () => {
      console.log("quiz has been cancelled");
      Cookies.set("inQuiz", "false");
      navigate("/");
    });

    socket.on("timerUpdate", () => {
      navigate("/answer");
    });

    socket.on("start-quiz", () => {
      navigate("/answer");
    });

    return () => {
      socket.off("cancel-quiz");
      socket.off("start-quiz");
      socket.off("timerUpdate");
    };
  }, []);

  return (
    <div className="flex justify-center items-center bg-[#226ce0] text-center sm:text-[2.125rem] text-[1.2rem] text-[#152c69] h-screen w-screen p-[5rem] font-font-4 ">
      <p>
        "Welcome to the 'Hurry Up and Wait' zone! Don't worry if you are
        rejoining the quiz after disconnecting you will be in the answer page as
        soon as the next question begins."
      </p>
    </div>
  );
};
