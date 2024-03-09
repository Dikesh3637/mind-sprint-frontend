import { useEffect } from "react";
import { Timer } from "./timer";
import { adminNamespace } from "../client-socket";

export type QuestionPageType = {
  question: string;
  options: string[];
  answer: string;
};

export const QuestionPage = ({ question, options }: QuestionPageType) => {
  useEffect(() => {
    adminNamespace.emit("setAnswerMutex", true);

    return () => {
      adminNamespace.emit("setAnswerMutex", false);
    };
  }, []);
  return (
    <div className=" h-screen w-screen bg-[#d0bcd5] flex justify-center items-center absolute start z-0">
      <div className="absolute hidden">
        <Timer ScreenType="QuestionScreen" />
      </div>
      <div className=" w-[95%] h-[95%] bg-[#226ce0] rounded-2xl grid grid-rows-2 p-[5rem] gap-10">
        <div className="bg-white text-black  w-full rounded-xl p-[1.5rem] text-[2.5rem] font-font-5 flex items-center justify-center">
          <h1 className="question">{question}</h1>
        </div>
        <div className="options-container grid grid-cols-2 grid-rows-2 gap-5 font-font-5">
          <div className="option border-4 border-[#152C69] rounded-xl text-[white] p-[1.5rem] flex items-center gap-2">
            <div className="rounded-full bg-[#152C69] w-[5rem] h-[5rem] flex items-center justify-center">
              <h1 className="text-[2rem]">01</h1>
            </div>
            <h1 className="text-[2rem]">{options[0]}</h1>
          </div>
          <div className="option border-4 border-[#152C69] rounded-xl text-[white] p-[1.5rem] flex items-center gap-2">
            <div className="rounded-full bg-[#152C69] w-[5rem] h-[5rem] flex items-center justify-center">
              <h1 className="text-[2rem]">02</h1>
            </div>
            <h1 className="text-[2rem]">{options[1]}</h1>
          </div>
          <div className="option border-4 border-[#152C69] rounded-xl text-[white] p-[1.5rem] flex items-center gap-2">
            <div className="rounded-full bg-[#152C69] w-[5rem] h-[5rem] flex items-center justify-center">
              <h1 className="text-[2rem]">03</h1>
            </div>
            <h1 className="text-[2rem]">{options[2]}</h1>
          </div>
          <div className="option border-4 border-[#152C69] rounded-xl text-[white] p-[1.5rem] flex items-center gap-2">
            <div className="rounded-full bg-[#152C69] w-[5rem] h-[5rem] flex items-center justify-center">
              <h1 className="text-[2rem]">04</h1>
            </div>
            <h1 className="text-[2rem]">{options[3]}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
