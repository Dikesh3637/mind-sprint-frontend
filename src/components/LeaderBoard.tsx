import { adminNamespace } from "../client-socket";
import { Timer } from "./timer";
import { LeadCard } from "./utilComp/LeaderCard";
import { useEffect, useState } from "react";

export const LeaderBoard = () => {
  const [leaderBoardInfo, setLeaderBoardInfo] = useState<any>([]);

  useEffect(() => {
    adminNamespace.emit("getLeaderBoard", {}, (data: any) => {
      console.log("leaderBoard data recieved from the server", data);
      setLeaderBoardInfo(data);
    });
  }, []);

  return (
    <div className="h-screen w-screen bg-[#DBDBFF] flex justify-center items-center">
      <div className="absolute hidden">
        <Timer ScreenType="LeaderBoard" />
      </div>

      <div className="w-[45%] h-[90%] rounded-2xl flex flex-col justify-center items-center bg-[#226ce0] gap-[1.5rem]">
        <div className="font-font-5 text-[#]">
          <h1 className="text-[2rem] text-white">Leader Board</h1>
        </div>
        <div className="grid grid-rows-10 w-[95%] h-[80%] border-2 border-[#152C69] p-[1rem] bg-white rounded-2xl gap-1">
          {leaderBoardInfo.map((team: any) => (
            <LeadCard
              teamNumber={team.teamNumber}
              points={team.time}
              key={team.teamNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
