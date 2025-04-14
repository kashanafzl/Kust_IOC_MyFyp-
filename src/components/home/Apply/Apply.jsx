import { useEffect } from 'react';
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { IoTimerSharp } from "react-icons/io5";
import { FaUserGraduate, FaBookReader } from "react-icons/fa";


import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Apply() {


    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, [])


  const navigate = useNavigate();

  const applyContent = [
    {
      id: 1,
      icon: <FaBookReader />,
      title: "Apply For Final Year Project",
      description: "Submit your FYP request here.",
      path: "/dashboard/requestforfyp",
    },
    {
      id: 2,
      icon: <IoTimerSharp />,
      title: "Apply Now For Exam Management",
      description: "Manage your exam applications efficiently.",
      path: "/dashboard/ExamManagement",
    },
    {
      id: 3,
      icon: <FaUserGraduate />,
      title: "Apply For Graduate Scholar",
      description: "Graduate Scholar Management Application.",
      path: "/dashboard/GraduateScholarManagement",
    },
  ];

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-montserrat">


      <div data-aos="zoom-in" className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {applyContent.map((content) => (
          <div
            key={content.id}
            onClick={() => handleCardClick(content.path)}
            className="bg-white flex flex-col items-center border-l-4 border-[#880C24] shadow-md rounded-xl p-8 text-center cursor-pointer hover:bg-[#880C24] hover:text-[#fff] transition-transform duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-4 text-[#7577d8] group-hover:scale-110 transition duration-300">
              {typeof content.icon === "string" ? (
                <Icon icon={content.icon} />
              ) : (
                content.icon
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              {content.title}
            </h2>
            <p className="text-gray-600 group-hover:text-[#fff] text-sm md:text-base">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
