import React, { useState } from "react";
import { FaSave } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdminFYPMarks() {
  const [approvedProjects, setApprovedProjects] = useState([
    {
      id: 1,
      studentName: "Kashan",
      registrationNumber: "CS120212069",
      title: "AI-Based Chatbot",
      marks: { presentation: "", report: "", viva: "", total: "" },
    },
    {
      id: 2,
      studentName: "Ali",
      registrationNumber: "CS120212022",
      title: "E-commerce Website",
      marks: { presentation: "", report: "", viva: "", total: "" },
    },
  ]);

  const handleInputChange = (id, field, value) => {
    setApprovedProjects((prev) =>
      prev.map((project) =>
        project.id === id
          ? {
              ...project,
              marks: {
                ...project.marks,
                [field]: value,
                total:
                  field !== "total"
                    ? calculateTotal({
                        ...project.marks,
                        [field]: value,
                      })
                    : value,
              },
            }
          : project
      )
    );
  };

  const calculateTotal = (marks) => {
    const { presentation, report, viva } = marks;
    return (
      (parseInt(presentation) || 0) +
      (parseInt(report) || 0) +
      (parseInt(viva) || 0)
    );
  };

  const handleSave = (id) => {
    toast.success("Marks saved successfully!", { position: "top-right" });
  };

  return (
    <div className="w-[95%] md:w-[90%] mx-auto mt-8 p-4 bg-white rounded-xl shadow-lg font-sans">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
        Admin Panel – FYP Marks Entry
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700 border border-gray-200">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="py-2 px-3 text-left">Student</th>
              <th className="py-2 px-3 text-left">Reg. No</th>
              <th className="py-2 px-3 text-left">Project Title</th>
              <th className="py-2 px-3 text-left">Presentation</th>
              <th className="py-2 px-3 text-left">Report</th>
              <th className="py-2 px-3 text-left">Viva</th>
              <th className="py-2 px-3 text-left">Total</th>
              <th className="py-2 px-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {approvedProjects.map((project) => (
              <tr key={project.id} className="border-t hover:bg-gray-50 transition">
                <td className="py-1.5 px-3">{project.studentName}</td>
                <td className="py-1.5 px-3">{project.registrationNumber}</td>
                <td className="py-1.5 px-3">{project.title}</td>
                <td className="py-1.5 px-3">
                  <input
                    type="number"
                    value={project.marks.presentation}
                    onChange={(e) =>
                      handleInputChange(project.id, "presentation", e.target.value)
                    }
                    className="w-16 p-1 border rounded text-xs text-center"
                  />
                </td>
                <td className="py-1.5 px-3">
                  <input
                    type="number"
                    value={project.marks.report}
                    onChange={(e) =>
                      handleInputChange(project.id, "report", e.target.value)
                    }
                    className="w-16 p-1 border rounded text-xs text-center"
                  />
                </td>
                <td className="py-1.5 px-3">
                  <input
                    type="number"
                    value={project.marks.viva}
                    onChange={(e) =>
                      handleInputChange(project.id, "viva", e.target.value)
                    }
                    className="w-16 p-1 border rounded text-xs text-center"
                  />
                </td>
                <td className="py-1.5 px-3 font-semibold text-blue-600 text-xs">
                  {project.marks.total}
                </td>
                <td className="py-1.5 px-3">
                  <button
                    onClick={() => handleSave(project.id)}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded flex items-center gap-1 text-xs"
                  >
                    <FaSave className="text-xs" />
                    Save
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AdminFYPMarks;
