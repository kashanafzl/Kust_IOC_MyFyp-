
// import React, { useState } from "react";

// const TimeTable = () => {
//   const initialSchedule = [
//     { id: 1, teacher: "Dr.Amjad", subject: "Network Security", time: "8:30 AM - 10:00 AM" },
//     { id: 2, teacher: "Dr.Muneer", subject: "Database", time: "10:00 AM - 11:40 AM" },
//     { id: 3, teacher: "Dr.Saima", subject: "AI", time: "11:40 AM - 1:00 PM" },
//     { id: 4, teacher: "Dr.Sanullah", subject: "Data Science", time: "1:00 PM - 2:30 PM" },
//   ];

//   const [schedule, setSchedule] = useState(initialSchedule);
//   const [newTeacher, setNewTeacher] = useState("");
//   const [newSubject, setNewSubject] = useState("");
//   const [newTime, setNewTime] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

//   // Add a new schedule entry
//   const handleAddEntry = () => {
//     if (!newTeacher || !newSubject || !newTime) {
//       alert("Please fill in all fields before adding.");
//       return;
//     }
//     setSchedule([...schedule, { id: schedule.length + 1, teacher: newTeacher, subject: newSubject, time: newTime }]);
//     setNewTeacher("");
//     setNewSubject("");
//     setNewTime("");
//   };

//   // Delete a schedule entry
//   const handleDeleteEntry = (id) => {
//     setSchedule(schedule.filter((entry) => entry.id !== id));
//   };

//   // Search filter
//   const filteredSchedule = schedule.filter(
//     (entry) =>
//       entry.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       entry.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       entry.time.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Sorting function
//   const handleSort = (key) => {
//     let direction = "asc";
//     if (sortConfig.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });

//     setSchedule([...schedule].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//       return 0;
//     }));
//   };

//   // Export timetable as CSV
//   const handleDownloadCSV = () => {
//     const csvContent =
//       "data:text/csv;charset=utf-8," +
//       ["Teacher,Subject,Time", ...schedule.map(({ teacher, subject, time }) => `${teacher},${subject},${time}`)].join("\n");
//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "timetable.csv");
//     document.body.appendChild(link);
//     link.click();
//   };

//   // Highlight row on click
//   const handleRowClick = (id) => {
//     setSelectedRow(id);
//   };

//   return (
//     <div className="p-5 w-[80%] mx-auto">
//       <h1 className="text-xl font-bold mb-4">Teacher Timetable</h1>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search Timetable..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="w-full mb-3 px-4 py-2 border rounded-md"
//       />

//       {/* Timetable Table */}
//       <table className="w-full border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border px-4 py-2 cursor-pointer" onClick={() => handleSort("teacher")}>Teacher</th>
//             <th className="border px-4 py-2 cursor-pointer" onClick={() => handleSort("subject")}>Subject</th>
//             <th className="border px-4 py-2 cursor-pointer" onClick={() => handleSort("time")}>Time</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredSchedule.map((item) => (
//             <tr
//               key={item.id}
//               className={`text-center cursor-pointer ${
//                 selectedRow === item.id ? "bg-yellow-200" : "hover:bg-gray-100"
//               }`}
//               onClick={() => handleRowClick(item.id)}
//             >
//               <td className="border px-4 py-2">{item.teacher}</td>
//               <td className="border px-4 py-2">{item.subject}</td>
//               <td className="border px-4 py-2">{item.time}</td>
//               <td className="border px-4 py-2 space-x-2">
//                 <button onClick={() => handleDeleteEntry(item.id)} className="px-2 py-1 bg-red-500 text-white rounded-md">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Input Fields for Adding a New Entry */}
//       <div className="my-4 p-4 border border-gray-300 rounded-md">
//         <h2 className="text-lg font-semibold mb-2">Add New Teacher to Timetable</h2>
//         <div className="flex flex-wrap gap-4">
//           <input
//             type="text"
//             placeholder="Teacher Name"
//             value={newTeacher}
//             onChange={(e) => setNewTeacher(e.target.value)}
//             className="border px-4 py-2 rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Subject"
//             value={newSubject}
//             onChange={(e) => setNewSubject(e.target.value)}
//             className="border px-4 py-2 rounded-md"
//           />
//           <input
//             type="text"
//             placeholder="Time Slot (e.g., 2:00 PM - 3:30 PM)"
//             value={newTime}
//             onChange={(e) => setNewTime(e.target.value)}
//             className="border px-4 py-2 rounded-md"
//           />
//           <button onClick={handleAddEntry} className="px-4 py-2 bg-blue-500 text-white rounded-md">
//             Add Entry
//           </button>
//         </div>
//       </div>

//       {/* Buttons Section */}
//       <div className="mt-4 flex flex-wrap gap-4 justify-center">
//         <button onClick={handleDownloadCSV} className="px-4 py-2 bg-green-500 text-white rounded-md">
//           Download CSV
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TimeTable;

import React from "react";

const TimeTable = () => {
  const schedule = [
    { id: 1, teacher: "Dr.Amjad", subject: "Network Security", time: "8:30 AM - 10:00 AM" },
    { id: 2, teacher: "Dr.Muneer", subject: "Database", time: "10:00 AM - 11:40 AM" },
    { id: 3, teacher: "Dr.Saima", subject: "AI", time: "11:40 AM - 1:00 PM" },
    { id: 4, teacher: "Dr.Sanullah", subject: "Data Science", time: "1:00 PM - 2:30 PM" },
  ];

  return (
    <div className="p-5 w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Teacher Timetable</h1>
      <table className="w-full border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-200 text-center">
            <th className="border px-4 py-4">Teacher</th>
            <th className="border px-4 py-4">Subject</th>
            <th className="border px-4 py-4">Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.id} className="text-center hover:bg-gray-100">
              <td className="border px-4 py-4">{item.teacher}</td>
              <td className="border px-4 py-4">{item.subject}</td>
              <td className="border px-4 py-4">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
