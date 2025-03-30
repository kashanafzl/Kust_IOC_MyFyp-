import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from '@iconify/react';

export default function AdminSport() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      fullName: 'Kashan',
      department: 'Computer Science',
      semester: '6th',
      registrationNumber: 'CS202001',
      specialization: 'AI',
      event: 'Swimming Competition',
    },
    {
      id: 2,
      fullName: 'Ahmed Ali',
      department: 'Electrical Engineering',
      semester: '4th',
      registrationNumber: 'EE202103',
      specialization: 'Power Systems',
      event: 'Football Match',
    },
    {
      id: 3,
      fullName: ' Rauf',
      department: 'Mechanical Engineering',
      semester: '8th',
      registrationNumber: 'ME201902',
      specialization: 'Thermodynamics',
      event: 'Tug of War',
    },
  ]);

  const handleAccept = (id) => {
    toast.success('Application Accepted');
    // You could also update status in your real backend
    setApplications(applications.filter((app) => app.id !== id));
  };

  const handleDelete = (id) => {
    toast.error('Application Deleted');
    setApplications(applications.filter((app) => app.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-10 px-4 sm:px-8 font-sans">
      <ToastContainer />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10 tracking-tight">
          Sports Event Applications
        </h1>

        <div className="overflow-x-auto bg-white rounded-2xl shadow-xl ring-1 ring-gray-200">
          <table className="min-w-full table-auto">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-4 px-6 text-left text-sm font-semibold">#</th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Full Name</th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Department</th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Semester</th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Reg. No.</th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Specialization</th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Event</th>
                <th className="py-4 px-6 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800">
              {applications.map((app, index) => (
                <tr
                  key={app.id}
                  className="hover:bg-blue-50 transition duration-150 ease-in-out"
                >
                  <td className="py-4 px-6 text-sm">{index + 1}</td>
                  <td className="py-4 px-6 text-sm">{app.fullName}</td>
                  <td className="py-4 px-6 text-sm">{app.department}</td>
                  <td className="py-4 px-6 text-sm">{app.semester}</td>
                  <td className="py-4 px-6 text-sm">{app.registrationNumber}</td>
                  <td className="py-4 px-6 text-sm">{app.specialization}</td>
                  <td className="py-4 px-6 text-sm font-semibold text-blue-600">
                    {app.event}
                  </td>
                  <td className="py-4 px-6 text-sm flex gap-4">
                    <button
                      onClick={() => handleAccept(app.id)}
                      className="text-green-600 hover:text-green-800 transition"
                      title="Accept"
                    >
                      <Icon icon="mdi:check-circle-outline" width="24" />
                    </button>
                    <button
                      onClick={() => handleDelete(app.id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete"
                    >
                      <Icon icon="mdi:delete-outline" width="24" />
                    </button>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center py-6 text-gray-400 italic">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
