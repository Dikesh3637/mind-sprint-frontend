import { QuestionInScreen } from "./QuestionInScreen";
import { QuestionPage, QuestionPageType } from "./QuestionPage";
import {
  useQuestionCounterStore,
  useQuestionDashboardStore,
} from "../store/store";
import { LeaderBoard } from "./LeaderBoard";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { adminNamespace } from "../client-socket";

export const QuestionDashboard = () => {
  const isAdmin = Cookies.get("isAdmin");
  const [questionList, setQuestionList] = useState<QuestionPageType[]>([]);
  const setMaxCycles = useQuestionCounterStore((state) => state.setMaxCycles);

  const currentScreen = useQuestionDashboardStore(
    (state) => state.currentScreen
  );

  let currentQuestion = useQuestionCounterStore(
    (state) => state.currentQuestion
  );

  useEffect(() => {
    adminNamespace.emit("getQuestionList", {}, (data: any) => {
      setQuestionList(data.questionList);
      setMaxCycles(data.questionList.length);
    });
    adminNamespace.on("getCurrentQuestionNumber", (data, callback) => {
      console.log(data);
      console.log("current question number: ", currentQuestion);
      callback({ currentQuestion: currentQuestion });
    });

    return () => {
      adminNamespace.off("getCurrentQuestionNumber");
    };
  }, [currentQuestion]);

  useEffect(() => {
    adminNamespace.emit("screenChange", { screen: currentScreen });
  }, [currentScreen]);

  return isAdmin === "true" ? (
    <div className="h-screen w-screen static">
      {currentScreen === "QuestionScreen" && (
        <QuestionPage
          question={questionList[currentQuestion].question}
          options={questionList[currentQuestion].options}
          answer={questionList[currentQuestion].answer}
          img={questionList[currentQuestion].img}
        />
      )}
      {currentScreen === "QuestionInScreen" && <QuestionInScreen />}
      {currentScreen === "LeaderBoard" && <LeaderBoard />}
    </div>
  ) : (
    <div className="text-red-600 h-screen w-screen flex justify-center items-center text-[2rem]">
      <h1>You Are Not Admin</h1>
    </div>
  );
};
