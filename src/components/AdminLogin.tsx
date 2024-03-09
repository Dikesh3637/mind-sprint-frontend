import { useEffect, useState } from "react";
import socket from "../client-socket";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export const AdminLogin = () => {
  const [adminId, setAdminId] = useState("");
  const [showError, setShowError] = useState(false);
  const [adminPassword, setAdminpassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Cookies.get("isAdmin") === "true" && navigate("/admin-dashboard");
  }, []);

  const handleClick = () => {
    if (adminId != "" && adminPassword != "") {
      socket.emit("admin-login", { adminId, adminPassword }, (data: any) => {
        if (data.adminFlag) {
          Cookies.set("isAdmin", "true");
          navigate("/admin-dashboard");
        } else {
          setShowPasswordError(true);
        }
      });
    } else {
      setShowError(true);
    }
  };
  
  return (
    <div className="h-screen bg-[#DBDBFF] flex justify-center items-center">
      <div className="sm:w-3/12 w-9/12 bg-white rounded-2xl p-6">
        <div className="flex flex-col sm:gap-12 gap-8 justify-center items-center">
          <div>
            <h1 className="font-font-5 text-[#1b1725] sm:text-2xl text-lg">
              Admin Login
            </h1>
          </div>
          <div className="flex flex-col sm:h-40 h-32 gap-6 sm:w-3/4 w-full relative">
            <label
              htmlFor="teamLeadId"
              className="font-font-2 absolute top-[-10px] left-4 bg-white px-2"
            >
              Admin ID
            </label>
            <input
              type="text"
              placeholder="Enter Your ID"
              className="font-font-2 border-2 border-[#d0bcd5] rounded-2xl p-4"
              onChange={(e) => setAdminId(e.target.value)}
            />

            <label
              htmlFor="teamLeadId"
              className="font-font-2 absolute top-[75px] left-4 bg-white px-2"
            >
              Password
            </label>
            <input
              type="text"
              placeholder="Enter your password"
              className="font-font-2 border-2 border-[#d0bcd5] rounded-2xl p-4"
              onChange={(e) => setAdminpassword(e.target.value)}
            />
          </div>
          <button
            className="font-font-4 sm:h-16 text-white bg-[#226ce0] sm:w-3/5 w-3/4 rounded-xl sm:text-lg h-12 text-base hover:text-[#226ce0] hover:bg-white border-2 border-[#226ce0]"
            onClick={handleClick}
          >
            Enter Dashboard
          </button>
          {showError && <p className="text-red-500">Please enter all fields</p>}
          {showPasswordError && <p className="text-red-500">Wrong Password</p>}
        </div>
      </div>
    </div>
  );
};
