import React, { useState } from "react";
import jsPDF from "jspdf";

const TimeTable = () => {
  const [schedule, setSchedule] = useState([
    { id: 1, teacher: "Dr.Amjad", subject: "Network Security", time: "8:30 AM - 10:00 AM" },
    { id: 2, teacher: "Dr.Muneer", subject: "Database", time: "10:00 AM - 11:40 AM" },
    { id: 3, teacher: "Dr.Saima", subject: "AI", time: "11:40 AM - 1:00 PM" },
    { id: 4, teacher: "Dr.Sanullah", subject: "Data Science", time: "1:00 PM - 2:30 PM" },
  ]);

  const [newTeacher, setNewTeacher] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newTime, setNewTime] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ teacher: "", subject: "", time: "" });

  const handleAddManualEntry = () => {
    if (!newTeacher || !newSubject || !newTime) {
      alert("Please fill in all fields before adding.");
      return;
    }
    setSchedule((prevSchedule) => [
      ...prevSchedule,
      {
        id: prevSchedule.length + 1,
        teacher: newTeacher,
        subject: newSubject,
        time: newTime,
      },
    ]);
    setNewTeacher("");
    setNewSubject("");
    setNewTime("");
  };

  const handleRechange = () => {
    setSchedule((prev) =>
      prev.map((item, index) => ({
        ...item,
        subject: prev[(index + 1) % prev.length].subject,
      }))
    );
  };

  const handleRechangeTime = () => {
    setSchedule((prev) =>
      prev.map((item, index) => ({
        ...item,
        time: prev[(index + 1) % prev.length].time,
      }))
    );
  };

  const handleRechangeTeachers = () => {
    setSchedule((prev) =>
      prev.map((item, index) => ({
        ...item,
        teacher: prev[(index + 1) % prev.length].teacher,
      }))
    );
  };

  const handleOverallChange = () => {
    setSchedule((prev) =>
      prev.map((item, index) => ({
        teacher: prev[(index + 1) % prev.length].teacher,
        subject: prev[(index + 2) % prev.length].subject,
        time: prev[(index + 3) % prev.length].time,
      }))
    );
  };

  const handleDownloadCSV = () => {
    const csvHeader = "Teacher,Subject,Time\n";
    const csvRows = schedule.map((item) => `${item.teacher},${item.subject},${item.time}`).join("\n");
    const blob = new Blob([csvHeader + csvRows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "timetable.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Teacher Timetable", 70, 10);
    let y = 30;
    doc.setFontSize(12);
    doc.text("Teacher", 10, y);
    doc.text("Subject", 80, y);
    doc.text("Time", 150, y);
    y += 10;
    doc.setFontSize(10);
    schedule.forEach((item) => {
      doc.text(item.teacher, 10, y);
      doc.text(item.subject, 80, y);
      doc.text(item.time, 150, y);
      y += 10;
    });
    doc.save("timetable.pdf");
  };

  const handleDoubleClick = (id, teacher, subject, time) => {
    setEditingId(id);
    setEditData({ teacher, subject, time });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    setSchedule((prev) =>
      prev.map((item) =>
        item.id === editingId ? { ...item, ...editData } : item
      )
    );
    setEditingId(null);
  };

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this row?");
    if (confirm) {
      setSchedule((prev) => prev.filter((item) => item.id !== editingId));
      setEditingId(null);
    }
  };

  return (
    <div id="mldivscreen" className="p-5 w-full mx-auto">
      {/* <h1 className="text-xl font-bold mb-4 text-center">Teacher Timetable</h1> */}
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border px-4 py-4">Teacher</th>
            <th className="border px-4 py-4">Subject</th>
            <th className="border px-4 py-4">Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <React.Fragment key={item.id}>
              <tr
                onDoubleClick={() =>
                  handleDoubleClick(item.id, item.teacher, item.subject, item.time)
                }
                className="text-center hover:bg-gray-100 cursor-pointer"
              >
                <td className="border px-4 py-4">{item.teacher}</td>
                <td className="border px-4 py-4">{item.subject}</td>
                <td className="border px-4 py-4">{item.time}</td>
              </tr>

              {editingId === item.id && (
                <tr className="bg-gray-50 text-center">
                  <td colSpan="3" className="p-4 space-y-2">
                    <div className="flex justify-center gap-2 flex-wrap">
                      <input
                        name="teacher"
                        value={editData.teacher}
                        onChange={handleEditChange}
                        placeholder="Edit Teacher"
                        className="border p-2 rounded-md"
                      />
                      <input
                        name="subject"
                        value={editData.subject}
                        onChange={handleEditChange}
                        placeholder="Edit Subject"
                        className="border p-2 rounded-md"
                      />
                      <input
                        name="time"
                        value={editData.time}
                        onChange={handleEditChange}
                        placeholder="Edit Time"
                        className="border p-2 rounded-md"
                      />
                      <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Add New Entry */}
          <div className="flex justify-center">
          <div className="my-6 p-4 m border border-gray-300 rounded-md bg-white">
        <h2 className="text-lg font-semibold mb-3">Add New Entry</h2>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Teacher"
            value={newTeacher}
            onChange={(e) => setNewTeacher(e.target.value)}
            className="border px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Subject"
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="border px-4 py-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            className="border px-4 py-2 rounded-md"
          />
          <button
            onClick={handleAddManualEntry}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
          </div>

      {/* Shuffle Buttons */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center">
        <button onClick={handleRechangeTeachers} className="px-4 py-2 bg-lightgraycolor text-white rounded-md hover:bg-indigo-600">
          Shuffle Teachers
        </button>
        <button onClick={handleRechange} className="px-4 py-2 bg-lightgraycolor text-white rounded-md hover:bg-indigo-600">
          Shuffle Subjects
        </button>
        <button onClick={handleRechangeTime} className="px-4 py-2 bg-lightgraycolor text-white rounded-md hover:bg-indigo-600">
          Shuffle Time
        </button>
        <button onClick={handleOverallChange} className="px-4 py-2 bg-lightgraycolor text-white rounded-md hover:bg-indigo-600">
          Shuffle All
        </button>
      </div>

      {/* Download Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button onClick={handleDownloadCSV} className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Download CSV
        </button>
        <button onClick={handleDownloadPDF} className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default TimeTable;