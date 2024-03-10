import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { adminNamespace } from "../client-socket";
import { useEffect } from "react";

export const EndScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    adminNamespace.emit("quiz-ended");
  }, []);
  const handleClick = () => {
    Cookies.set("isAdmin", "false");
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#226ce0]">
      <div className="w-[90%] h-[90%] bg-white rounded-2xl flex flex-col  items-center justify-around">
        <img
          src="./assets/thankyou.svg"
          alt=""
          className="w-[40%] h-[40%] relative right-4"
        />
        <button
          className="bg-[#226ce0] text-white font-font-5 rounded-xl flex items-center justify-center border-2 border-[#226ce0] hover:bg-white hover:text-[#226ce0] text-3xl p-2 w-[15rem]"
          onClick={handleClick}
        >
          Exit Quiz
        </button>
      </div>
    </div>
  );
};
