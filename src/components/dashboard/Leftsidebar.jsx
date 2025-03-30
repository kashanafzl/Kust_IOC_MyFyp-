import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaBars,
  FaTimes,
  FaUserGraduate,
} from "react-icons/fa";
import { IoBook, IoTimerSharp } from "react-icons/io5";

function Leftsidebar({ role, isOpen, toggleSidebar }) {
  const userLinks = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "requestforfyp", icon: <IoBook />, text: "Request For FYP" },
    { to: "GraduateScholarManagement", icon: <FaUserGraduate />, text: "Graduate Scholar" },
    { to: "timetabel", icon: <IoTimerSharp />, text: "Time Table" },
    { to: "ExamManagement", icon: <IoTimerSharp />, text: "Exam Management" },
    { to: "profile", icon: <FaUser />, text: "Profile" },
  ];

  const adminLinks = [
    { to: "/", icon: <FaHome />, text: "Admin Home" },
    { to: "adminviewfyp", icon: <IoBook />, text: "Admin View FYP" },
    { to: "admin_fyp_marks", icon: <IoBook />, text: "Admin FYP Marks" },
    { to: "GraduateScholarManagement", icon: <FaUserGraduate />, text: "View Scholar Management" },
    { to: "adminviewtimetabel", icon: <FaUserGraduate />, text: "Admin Time Table" },
    { to: "ExamManagement", icon: <IoTimerSharp />, text: "Admin Exam Management" },
    { to: "profile", icon: <FaUser />, text: "Admin Profile" },
    { to: "admin_sport", icon: <FaUser />, text: "Admin Sport" },
  ];

  const links = role === "admin" ? adminLinks : userLinks;  

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen transition-all duration-300 ease-in-out ${
        isOpen ? "w-60" : "w-14"
      } bg-gray-800 text-white shadow-lg flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3 bg-gray-900">
        {isOpen && <h1 className="text-xl font-bold">IOC</h1>}
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </div>

      {/* Menu */}
      <ul className="space-y-8 mt-3">
        {links.map((item) => (
          <li key={item.text}>
            <Link
              to={item.to}
              className="flex items-center py-3 px-3 hover:bg-gray-700 transition-all duration-200"
            >
              <span className="text-lg">{item.icon}</span>
              <span
                className={`ml-3 text-sm font-medium transition-all duration-200 ${
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
      <div className="mt-auto mb-3 px-3 text-start">
        <p className={`text-gray-400 transition-all duration-200 ${isOpen ? "text-xs" : "text-[10px]"}`}>
          © MY_FYP | Kashan Afzal
        </p>
      </div>
    </div>
  );
}

export default Leftsidebar;
