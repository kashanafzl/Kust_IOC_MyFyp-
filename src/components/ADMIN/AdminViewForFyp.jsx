// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaCheckCircle, FaTimesCircle, FaEye } from "react-icons/fa";
// import { motion } from "framer-motion";

// function AdminViewForFYP() {
//   const [requests, setRequests] = useState([
//     {
//       id: 1,
//       supervisor: "Sir Muneer",
//       title: "AI-Based Chatbot",
//       description: "A chatbot that answers questions using AI.",
//       advantages: "Automates customer support and reduces workload.",
//       tools: "React, Node.js, TensorFlow",
//       status: "pending",
//     },
//     {
//       id: 2,
//       supervisor: "Sir Zeeshan",
//       title: "E-commerce Website",
//       description: "An online store with payment integration.",
//       advantages: "Enables online sales and payments efficiently.",
//       tools: "React, Firebase, Stripe",
//       status: "pending",
//     },
//     {
//       id: 3,
//       supervisor: "Sir Qadeem",
//       title: "E-commerce Website",
//       description: "An online store with payment integration.",
//       advantages: "Enables online sales and payments efficiently.",
//       tools: "React, Firebase, Stripe",
//       status: "pending",
//     },
//   ]);

//   const [selectedProject, setSelectedProject] = useState(null);

//   const handleAction = (id, status) => {
//     setRequests(
//       requests.map((request) =>
//         request.id === id ? { ...request, status } : request
//       )
//     );
//     toast.success(`FYP request ${status}!`, { position: "top-right" });
//   };

//   const handleDelete = (id) => {
//     setRequests(requests.filter((request) => request.id !== id));
//     toast.error("FYP request deleted!", { position: "top-right" });
//   };

//   return (
//     <div className="ml-24 md:ml-80 font-montserrat w-[80%] mt-10 p-4 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//         Admin View - FYP Requests
//       </h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-200">
//           <thead>
//             <tr className="bg-gray-200 text-[18px] text-gray-700">
//               <th className="py-2 px-4 border">Title</th>
//               <th className="py-2 px-4 border">Supervisor</th>
//               <th className="py-2 px-4 border">Description</th>
//               <th className="py-2 px-4 border">Tools</th>
//               <th className="py-2 px-4 border">Status</th>
//               <th className="py-2 px-4 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((request) => (
//               <tr key={request.id} className="text-center text-[15px]">
//                 <td className="py-6 px-2 border">{request.title}</td>
//                 <td className="py-6 px-2 border">{request.supervisor}</td>
//                 <td className="py-6 px-0 border">
//                   {request.description.split(" ").slice(0, 3).join(" ")}...
//                 </td>
//                 <td className="py-6 px-2 border">{request.tools}</td>
//                 <td
//                   className={`py-2 px-2 border font-semibold ${
//                     request.status === "accepted"
//                       ? "text-green-600"
//                       : request.status === "declined"
//                       ? "text-red-600"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {request.status}
//                 </td>
//                 <td className="py-6 px-2 border flex justify-center space-x-4">
//                   <button
//                     className="text-blue-600 text-xl hover:text-blue-800"
//                     onClick={() => setSelectedProject(request)}
//                   >
//                     <FaEye />
//                   </button>
//                   <button
//                     className="text-green-600 text-xl hover:text-green-800"
//                     onClick={() => handleAction(request.id, "accepted")}
//                   >
//                     <FaCheckCircle />
//                   </button>
//                   <button
//                     className="  text-red-600 text-xl hover:text-red-800"
//                     onClick={() => handleDelete(request.id, "declined")}
//                   >
//                     <FaTimesCircle />
//                   </button>
//                   {/* <button
//                     className="text-gray-600 text-xl hover:text-gray-800"
//                     onClick={() => handleDelete(request.id)}
//                   >
//                     <FaTrash />
//                   </button> */}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Popup for Full Description */}
//       {selectedProject && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="bg-white p-6 rounded-lg shadow-lg w-1/2"
//           >
//             <h2 className="text-2xl font-semibold mb-4">
//               {selectedProject.title}
//             </h2>
//             <p className="py-2">
//               <strong>Supervisor:</strong> {selectedProject.supervisor}
//             </p>
//             <p className="py-2">
//               <strong>Description:</strong> {selectedProject.description}
//             </p>
//             <p className="py-2">
//               <strong>Advantages:</strong> {selectedProject.advantages}
//             </p>
//             <p className="py-2">
//               <strong>Tools:</strong> {selectedProject.tools}
//             </p>
//             <p className="py-2">
//               <strong>Status:</strong> {selectedProject.status}
//             </p>
//             <div className="flex justify-end mt-4">
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
//                 onClick={() => setSelectedProject(null)}
//               >
//                 Close
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// }

// export default AdminViewForFYP;


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
      status: "pending",
    },
    {
      id: 3,
      studentName: " Ahmed",
      registrationNumber: "CS120212088",
      supervisor: "Sir Qadeem",
      title: "Mobile App for Online Learning",
      description: "An app offering online courses and certifications.",
      tools: "React Native, Firebase, Redux",
      status: "pending",
    },
  ]);

  const [selectedProject, setSelectedProject] = useState(null);
const handleAction = (id, status) => {
  setRequests((prevRequests) =>
    prevRequests.map((request) =>
      request.id === id ? { ...request, status: status.toLowerCase().trim() } : request
    )
  );
  toast.success(`FYP request ${status}!`, { position: "top-right" });
};

  const handleDelete = (id) => {
    setRequests(requests.filter((request) => request.id !== id));
    toast.error("FYP request deleted!", { position: "top-right" });
  };

  return (
    <div className="ml-10 md:ml-52 font-montserrat w-[80%] mt-10 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Admin View for FYP Requests</h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm text-gray-600">Student Name</th>
            <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm text-gray-600">Registration No</th>
            <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm text-gray-600">Supervisor</th>
            <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm text-gray-600">Title</th>
            <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm text-gray-600">Description</th>
            <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm text-gray-600">Tools</th>
            <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm text-gray-600">Status</th>
            <th className="py-2 px-4 bg-gray-100 border-b text-left text-sm text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="hover:bg-gray-50 transition">
              <td className="py-2 px-4 border-b">{request.studentName}</td>
              <td className="py-2 px-4 border-b">{request.registrationNumber}</td>
              <td className="py-2 px-4 border-b">{request.supervisor}</td>
              <td className="py-2 px-4 border-b">{request.title.slice(0,10)}...</td>
              <td className="py-2 px-4 border-b">{request.description.slice(0,15)}...</td>
              <td className="py-2 px-4 border-b">{request.tools}</td>
              <td className="py-2 px-4 border-b">
  <span
    className={`px-2 py-1 rounded text-xs font-semibold ${
      request.status.toLowerCase().trim() === "approved"
        ? "bg-green-100 text-green-600"
        : request.status.toLowerCase().trim() === "rejected"
        ? "bg-red-100 text-red-600"
        : "bg-yellow-100 text-yellow-600"
    }`}
  >
    {request.status}
  </span>
</td>

              <td className="py-2 px-4 border-b">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle
                    onClick={() => handleAction(request.id, "approved")}
                    className="text-green-500 cursor-pointer hover:scale-110 transition"
                  />
                  <FaTimesCircle
                    onClick={() => handleDelete(request.id, "rejected")}
                    className="text-red-500 cursor-pointer hover:scale-110 transition"
                  />
                  <FaEye
                    onClick={() => setSelectedProject(request)}
                    className="text-blue-500 cursor-pointer hover:scale-110 transition"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedProject && (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
  >
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl w-[90%] md:w-[50%] max-w-3xl relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition transform hover:scale-110"
        onClick={() => setSelectedProject(null)}
      >
        <FaTimes className="text-2xl" />
      </button>

      {/* Popup Title */}
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Project Details
      </h3>

      {/* Project Details */}
      <div className="space-y-4">
        <p className="text-gray-700"><strong>Student Name:</strong> {selectedProject.studentName}</p>
        <p className="text-gray-700"><strong>Registration No:</strong> {selectedProject.registrationNumber}</p>
        <p className="text-gray-700"><strong>Supervisor:</strong> {selectedProject.supervisor}</p>
        <p className="text-gray-700"><strong>Title:</strong> {selectedProject.title}</p>
        <p className="text-gray-700"><strong>Description:</strong> {selectedProject.description}</p>
        <p className="text-gray-700"><strong>Tools:</strong> {selectedProject.tools}</p>
      </div>
    </div>
  </motion.div>
)}

      <ToastContainer />
    </div>
  );
}

export default AdminViewForFYP;
