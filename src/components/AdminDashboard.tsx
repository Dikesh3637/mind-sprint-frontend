import socket, { adminNamespace } from "../client-socket.ts";
import { PlayerIcon } from "./utilComp/PlayerIcon.tsx";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export const AdminDashboard = () => {
  const isAdmin = Cookies.get("isAdmin");
  const [teamNumber, setTeamNumber] = useState<string[]>();
  let participantLength = 0;
  useEffect(() => {
    socket.emit("participant:list", {}, (data: any) => {
      participantLength = data.length;
      setTeamNumber(data);
      console.log("participant data recieved from the server", data);
    });

    adminNamespace.on("participantListUpdate", (data: any) => {
      console.log(
        "participant data recieved from the server(server update)",
        data
      );
      setTeamNumber(data);
    });

    return () => {
      adminNamespace.off("participantListUpdate");
    };
  }, [participantLength]);

  const navigate = useNavigate();
  const cancelHandler = () => {
    Cookies.set("isAdmin", "false");
    socket.emit("cancel-quiz");
    navigate("/");
  };

  const startHandler = () => {
    navigate("/question");
    socket.emit("start-quiz");
  };

  return isAdmin === "true" ? (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-font-5">MindSprint</h1>
        <p className="text-[1rem]"> Powered By Page1Dev</p>
      </div>

      <div className="h-[75%] w-[80%] bg-[#226ce0] rounded-2xl border-4 border-[#152C69] font-font-5 grid grid-cols-7 grid-rows-4 p-[2rem] place-items-center ">
        {teamNumber &&
          teamNumber.map((team) => <PlayerIcon teamNumber={team} key={team} />)}
      </div>
      <div className="flex justify-center items-center gap-10 font-font-3 font-medium">
        <button
          className="text-[1.3rem] bg-white text-[#002B5B] w-[13rem] h-[3rem] rounded-xl border-2 border-[#002B5B] hover:border-[#FAD74E] hover:bg-[#FAD74E]"
          onClick={cancelHandler}
        >
          Cancel Quiz
        </button>
        <button
          className="text-[1.3rem]  bg-[#FAD74E] text-[#002B5B] border-2 w-[13rem] h-[3rem] rounded-xl hover:bg-white  border-[#002B5B]"
          onClick={startHandler}
        >
          Start Quiz
        </button>
      </div>
    </div>
  ) : (
    <div className="not-admin-error">
      <h1>You are not an admin</h1>
    </div>
  );
};
