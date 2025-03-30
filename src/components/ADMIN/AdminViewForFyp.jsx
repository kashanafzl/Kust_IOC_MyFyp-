import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle, FaTimesCircle, FaEye, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function AdminViewForFYP() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      studentName: "Kashan",
      registrationNumber: "CS120212069",
      supervisor: "Sir Muneer",
      title: "AI-Based Chatbot",
      description: "A chatbot that automates customer support using AI.",
      tools: "React, Node.js, TensorFlow",
      advantages: [
        "Reduces customer support costs",
        "Available 24/7",
        "Handles multiple queries simultaneously",
      ],
      status: "pending",
    },
    {
      id: 2,
      studentName: "Ali",
      registrationNumber: "CS120212022",
      supervisor: "Sir Zeeshan",
      title: "E-commerce Website",
      description: "An online store with payment integration.",
      tools: "React, Firebase, Stripe",
      advantages: [
        "Streamlined shopping experience",
        "Secure payment integration",
        "User-friendly interface",
      ],
      status: "pending",
    },
    {
      id: 3,
      studentName: "Ahmed",
      registrationNumber: "CS120212088",
      supervisor: "Sir Qadeem",
      title: "Mobile App for Online Learning",
      description: "An app offering online courses and certifications.",
      tools: "React Native, Firebase, Redux",
      advantages: [
        "Flexible learning schedule",
        "Wide range of courses",
        "Progress tracking and certification",
      ],
      status: "pending",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleAction = (id, status) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id
          ? { ...request, status: status.toLowerCase().trim() }
          : request
      )
    );
    toast.success(`FYP request ${status}!`, { position: "top-right" });
  };

  const handleDelete = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
    toast.error("FYP request deleted!", { position: "top-right" });
  };

  return (
    <div className="mx-auto h-full mt-8 p-4 font-sans w-[95%] md:w-[90%] bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Admin Panel – Final Year Project Requests
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-[14px] text-gray-700 border border-gray-200">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-2 px-3 text-left">Student</th>
              <th className="py-2 px-3 text-left">Reg. No</th>
              <th className="py-2 px-3 text-left">Supervisor</th>
              <th className="py-2 px-3 text-left">Title</th>
              <th className="py-2 px-3 text-left">Description</th>
              <th className="py-2 px-3 text-left">Tools</th>
              <th className="py-2 px-3 text-left">Status</th>
              <th className="py-2 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="py-1.5 px-3">{request.studentName}</td>
                <td className="py-1.5 px-3">{request.registrationNumber}</td>
                <td className="py-1.5 px-3">{request.supervisor}</td>
                <td className="py-1.5 px-3">{request.title.slice(0, 15)}...</td>
                <td className="py-1.5 px-3">{request.description.slice(0, 20)}...</td>
                <td className="py-1.5 px-3">{request.tools}</td>
                <td className="py-1.5 px-3">
                  <span
                    className={`px-2 py-0.5 rounded text-xs font-medium ${
                      request.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : request.status === "rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {request.status}
                  </span>
                </td>
                <td className="py-1.5 px-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleAction(request.id, "approved")}
                      className="p-1 rounded-full hover:bg-green-200 transition"
                      title="Approve"
                    >
                      <FaCheckCircle className="text-green-600 text-sm" />
                    </button>
                    <button
                      onClick={() => handleDelete(request.id)}
                      className="p-1 rounded-full hover:bg-red-200 transition"
                      title="Delete"
                    >
                      <FaTimesCircle className="text-red-600 text-sm" />
                    </button>
                    <button
                      onClick={() => setSelectedProject(request)}
                      className="p-1 rounded-full hover:bg-blue-200 transition"
                      title="View"
                    >
                      <FaEye className="text-blue-600 text-sm" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-2"
        >
          <div className="bg-white p-4 md:p-6 rounded-xl shadow-xl w-full md:w-[60%] max-w-2xl relative text-sm">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedProject(null)}
            >
              <FaTimes className="text-lg" />
            </button>

            <h3 className="text-lg font-semibold text-center mb-4 text-gray-800">
              Project Details
            </h3>

            <div className="space-y-1.5 text-gray-700">
              <p><strong>Student:</strong> {selectedProject.studentName}</p>
              <p><strong>Reg No:</strong> {selectedProject.registrationNumber}</p>
              <p><strong>Supervisor:</strong> {selectedProject.supervisor}</p>
              <p><strong>Title:</strong> {selectedProject.title}</p>
              <p><strong>Description:</strong> {selectedProject.description}</p>
              <p><strong>Tools:</strong> {selectedProject.tools}</p>
              {selectedProject.advantages && (
                <div>
                  <p className="font-semibold">Advantages:</p>
                  <ul className="list-disc list-inside ml-4 space-y-0.5">
                    {selectedProject.advantages.map((adv, index) => (
                      <li key={index}>{adv}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}

      <ToastContainer />
    </div>
  );
}

export default AdminViewForFYP;
