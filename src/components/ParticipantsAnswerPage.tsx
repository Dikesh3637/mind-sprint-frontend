import { useEffect, useState } from "react";
import socket, { answerNamespace } from "../client-socket";
import { useClockStore } from "../store/store";
import Cookies from "js-cookie";

export const ParticipantsAnswerPage = () => {
  const answerTime = useClockStore((state) => state.answerTime);
  const [timerValue, setTimerValue] = useState(answerTime);
  const [time, setTime] = useState(new Date().getTime());
  const [answered, setAnswered] = useState(false);
  const [adminScreen, setAdminScreen] = useState("");
  const teamNumber = Cookies.get("teamId");

  useEffect(() => {
    socket.on("timerUpdate", (data) => {
      setTimerValue(data);
    });
    socket.on("screenChange", (data) => {
      console.log("admin screen before change: ", adminScreen);
      console.log("admin screen after change: ", data);
      setAdminScreen(data);
    });
    socket.on("startUserTimer", () => {
      setTime(new Date().getTime());
      setAnswered(false);
    });

    return () => {
      socket.off("timerUpdate");
      socket.off("startUserTimer");
      socket.off("screenChange");
    };
  }, []);

  if (timerValue === 0) {
    setTimeout(() => setTimerValue(10), 1000);
  }

  const handleClick = (number: number) => {
    if (answered) {
      return;
    }
    setAnswered(true);
    const diffTime = new Date().getTime() - time;
    answerNamespace.emit("participantAnswer", {
      teamNumber,
      answer: number,
      time: diffTime,
    });
  };

  return (
    <div className="h-screen w-screen bg-[#226ce0] flex flex-col justify-center items-center gap-[2rem] font-font-5">
      {adminScreen === "QuestionScreen" && answered && (
        <div className="answer-screen-blur h-screen w-screen absolute backdrop-filter backdrop-blur-lg">
          <h1 className="posted-screen flex justify-center items-center h-[100%] text-7xl text-white">
            Your answer has been posted
          </h1>
        </div>
      )}
      {adminScreen !== "QuestionScreen" && (
        <div className="answer-screen-blur h-screen w-screen absolute backdrop-filter backdrop-blur-lg">
          <h1 className="posted-screen flex justify-center items-center h-[100%] text-7xl text-white">
            Waiting for the question
          </h1>
        </div>
      )}
      <div className="sm:w-[10rem] bg-white sm:h-[10rem] w-[5rem] h-[5rem] rounded-full flex justify-center items-center">
        <h1 className="sm:text-[6rem] text-[3rem] font-font-5 text-[#152c69]">
          {timerValue}
        </h1>
      </div>
      <div className="sm:h-[50%] sm:w-[70%] h-[65%] w-[80%] grid grid-rows-2 grid-cols-2 text-white gap-4">
        <button
          onClick={() => handleClick(1)}
          className="border-4 border-[#152c69] flex items-center justify-center rounded-2xl hover:bg-[#152c69]"
        >
          <div className="rounded-full bg-[#152c69] sm:text-[5rem] sm:w-[10rem] sm:h-[8rem] text-[3rem] w-[6rem] h-[5rem]">
            <h1>01</h1>
          </div>
        </button>
        <button
          onClick={() => handleClick(2)}
          className="border-4 border-[#152c69] flex items-center justify-center rounded-2xl  hover:bg-[#152c69]"
        >
          <div className="rounded-full bg-[#152c69] sm:text-[5rem] sm:w-[10rem]  sm:h-[8rem] text-[3rem] w-[6rem] h-[5rem]">
            <h1>02</h1>
          </div>
        </button>
        <button
          onClick={() => handleClick(3)}
          className="border-4 border-[#152c69] flex items-center justify-center rounded-2xl  hover:bg-[#152c69]"
        >
          <div className="rounded-full bg-[#152c69] sm:text-[5rem] sm:w-[10rem] sm:h-[8rem] text-[3rem] w-[6rem] h-[5rem]">
            <h1>03</h1>
          </div>
        </button>
        <button
          onClick={() => handleClick(4)}
          className="border-4 border-[#152c69] flex items-center justify-center rounded-2xl  hover:bg-[#152c69]"
        >
          <div className="rounded-full bg-[#152c69] sm:text-[5rem] sm:w-[10rem] sm:h-[8rem] text-[3rem] w-[6rem] h-[5rem]">
            <h1>04</h1>
          </div>
        </button>
      </div>
    </div>
  );
};
