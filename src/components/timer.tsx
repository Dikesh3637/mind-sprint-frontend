import { useEffect, useState } from "react";
import {
  useClockStore,
  useQuestionDashboardStore,
  useQuestionCounterStore,
} from "../store/store";
import { twMerge } from "tailwind-merge";
type timerType = {
  ScreenType: "QuestionInScreen" | "QuestionScreen" | "LeaderBoard";
  className?: string;
};
import { useNavigate } from "react-router-dom";
import { adminNamespace, answerNamespace } from "../client-socket";

export const Timer = ({ ScreenType, className }: timerType) => {
  const time =
    ScreenType === "QuestionInScreen" || ScreenType === "LeaderBoard"
      ? useClockStore.getState().waitTime
      : useClockStore.getState().answerTime;

  const { setCurrentScreen } = useQuestionDashboardStore();

  const [currentTime, setcurrentTime] = useState<number>(time);

  const incrementCurrentQuestion = useQuestionCounterStore(
    (state) => state.incrementCurrentQuestion
  );

  const maxCycles = useQuestionCounterStore((state) => state.maxCycles);
  const currentCycle = useQuestionCounterStore(
    (state) => state.currentQuestion
  );

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (ScreenType === "QuestionScreen") {
        adminNamespace.emit("adminTimerUpdate", { time: currentTime - 1 });
      }
      setcurrentTime(currentTime - 1);
    }, 1000);
    if (currentTime === 0) {
      clearInterval(interval);
      if (ScreenType === "LeaderBoard") {
        if (currentCycle === maxCycles) {
          navigate("/end-screen");
        }
        setCurrentScreen("QuestionInScreen");
      } else if (ScreenType === "QuestionScreen") {
        incrementCurrentQuestion();
        setCurrentScreen("LeaderBoard");
      } else {
        setCurrentScreen("QuestionScreen");
        answerNamespace.emit("startUserTimer", {});
      }
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      className={twMerge(
        className,
        "rounded-full border-4 border-[#152C69] bg-white w-[10rem] h-[10rem] flex justify-center items-center"
      )}
    >
      <h1 className="text-[2.5rem] text-[#152C69] ">{currentTime}</h1>
    </div>
  );
};
