import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaCog,
  FaBars,
  FaTimes,
  FaUserGraduate,
} from "react-icons/fa";
import { IoBook, IoTimerSharp } from "react-icons/io5";

function Leftsidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative top-0 left-0 z-50">
      <div
        className={`bg-gray-800 text-white h-full shadow-lg flex flex-col transition-all duration-500 ease-in-out ${
          isOpen ? "w-72" : "w-16"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
          {isOpen && <h1 className="text-2xl font-bold text-white">IOC</h1>}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>

        {/* Menu */}
        <ul className="space-y-6 mt-2">
          {[
            { to: "/", icon: <FaHome />, text: "Home" },
            { to: "requestforfyp", icon: <IoBook />, text: "Request For FYP" },
            { to: "GraduateScholarManagement", icon: <FaUserGraduate />, text: "Graduate Scholar" },
            { to: "timetabel", icon: <IoTimerSharp />, text: "Time Table" },
            { to: "ExamManagement", icon: <IoTimerSharp />, text: "Exam Management" },
            { to: "profile", icon: <FaUser />, text: "Profile" },
            { to: "/analytics", icon: <FaChartBar />, text: "Analytics" },
            { to: "setting", icon: <FaCog />, text: "Settings" },
          ].map((item) => (
            <li className="group" key={item.text}>
              <Link
                to={item.to}
                className="flex items-center py-3 px-4 hover:bg-gray-700 transition-all duration-300 ease-in-out"
              >
                <span className="text-xl">{item.icon}</span>
                <span
                  className={`ml-4 text-base font-semibold transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                  }`}
                >
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto mb-4 text-start py-4 px-4">
          <p
            className={`text-gray-400 transition-all duration-300 ${
              isOpen ? "text-sm" : "text-[8px]"
            }`}
          >
            © MY_FYP | kashanAfzal
          </p>
        </div>
      </div>
    </div>
  );
}

export default Leftsidebar;
