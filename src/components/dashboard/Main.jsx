import React, { useState } from "react";
import Leftsidebar from "./Leftsidebar";
import SimpleNavbar from "../home/Navbar/SimpleNavbar";
import { Outlet } from "react-router-dom";

function Main() {
  const role = "user"; // Change to 'admin' for admin view
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      <SimpleNavbar />

      <div className="flex">
        <Leftsidebar role={role} isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div
          className={`transition-all relative top-0 duration-300 ease-in-out flex-1 min-h-screen p-4 ${
            isOpen ? "ml-60" : "ml-14"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Main;
