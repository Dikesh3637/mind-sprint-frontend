import { Link } from "react-router-dom";
export const LoginPage = () => {
  return (
    <div className="h-screen w-screen bg-[#DBDBFF] flex justify-center items-center">
      <div className="sm:w-[50%] w-[80%] bg-white rounded-2xl grid sm:grid-cols-2  p-[1.5rem] gap-[1rem]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-[90%] sm:gap-[3rem] gap-[1rem] ">
            <div>
              <h1 className="font-font-5 text-[#1b1725] sm:text-[2.5rem] text-[1.5rem]">
                MindSprint
              </h1>
              <p className="font-font-2 font-thin text-[#534b62]">
                A Code-A-Bit round
              </p>
            </div>

            <div className="">
              <h1 className="font-font-5 text-[#1b1725] sm:text-[3.5rem] text-[1.5rem]">
                Get Started
              </h1>
            </div>
            <div className="grid grid-rows-2 gap-5 h-[9rem] ">
              <Link
                className="bg-[#226ce0] text-white font-font-5 rounded-xl flex items-center justify-center border-2 border-[#226ce0] hover:bg-white hover:text-[#226ce0]"
                to={"/admin-login"}
              >
                Admin Login
              </Link>
              <Link
                className="bg-[#226ce0] text-white font-font-5 rounded-xl flex items-center justify-center hover:bg-white hover:text-[#226ce0] border-2 border-[#226ce0]"
                to={"/join-screen"}
              >
                Participant Login
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#226ce0]  rounded-2xl flex flex-col justify-center items-center order-first sm:order-last">
          <img src="./assets/man thinking 1.svg" alt="" className="h-[60%]" />
          <h3 className="text-white font-font-2 ">Powered by Page1Dev</h3>
        </div>
      </div>
    </div>
  );
};

{
  /* <Link
          className="sm:text-[1.5rem] text-[1rem] bg-black text-center rounded-lg p-[.7rem] border-black text-white hover:text-black hover:bg-white hover:drop-shadow-xl hover:border-black hover:border-2"
          to={"/admin-login"}
        >
          Admin Login
        </Link>
        <Link
          className="sm:text-[1.5rem] text-[1rem] bg-black text-center rounded-lg p-[.7rem] border-black text-white hover:text-black hover:bg-white hover:drop-shadow-xl hover:border-black hover:border-2"
          to={"/join-screen"}
        >
          Participate Login
        </Link>
        
         <Link
                className="bg-[#226ce0] text-white font-font-5 rounded-xl flex items-center justify-center border-2 border-[#226ce0] hover:bg-white hover:text-[#226ce0]"
                to={"/admin-login"}
              >
                Admin Login
              </Link>
              <Link
                className="bg-[#226ce0] text-white font-font-5 rounded-xl flex items-center justify-center hover:bg-white hover:text-[#226ce0] border-2 border-[#226ce0]"
                to={"/admin-login"}
              >
                Participant Login
              </Link>*/
}
