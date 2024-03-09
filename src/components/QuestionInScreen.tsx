import { Timer } from "./timer";

export const QuestionInScreen = () => {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center flex-col z-2 font-font-4">
      {/* Blur background */}
      <div className="absolute inset-0  bg-opacity-50  z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center flex-col gap-[2rem]">
        <h1 className="text-[#152C69] text-[2.5rem]">
          Next question will be shown in:
        </h1>
        <Timer ScreenType="QuestionInScreen" />
      </div>
    </div>
  );
};
