import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FypForm() {
  const [formData, setFormData] = useState({
    supervisor: '',
    title: '',
    description: '',
    advantages: '',
    tools: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { supervisor, title, description, advantages, tools } = formData;

    if (!supervisor || !title || !description || !advantages || !tools) {
      toast.error('Please fill out all fields!', {
        position: 'top-center',
        autoClose: 4000,
        pauseOnHover: true,
        theme: 'colored',
      });
      return;
    }

    toast.success('FYP Request Submitted Successfully!', {
      position: 'top-center',
      autoClose: 4000,
      pauseOnHover: true,
      theme: 'colored',
    });

    console.log('Form Data Submitted:', formData);

    // Reset form
    setFormData({
      supervisor: '',
      title: '',
      description: '',
      advantages: '',
      tools: '',
    });
  };

  return (
    <>
      <ToastContainer />
      <div id="mldivscreen" className="px-4 w-full md:w-[70%] py-8 mx-auto max-w-7xl">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            FYP Request Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 text-base">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Supervisor */}
              <div>
                <label htmlFor="supervisor" className="block font-medium text-gray-700 mb-1">
                  Select Supervisor
                </label>
                <select
                  id="supervisor"
                  name="supervisor"
                  value={formData.supervisor}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">-- Select Supervisor --</option>
                  <option value="Sir Muneer">Sir Muneer</option>
                  <option value="Sir Zeeshan">Sir Zeeshan</option>
                  <option value="Sir Adnan">Sir Adnan</option>
                  <option value="Sir Irfan">Sir Irfan</option>
                  <option value="Mam Saima">Mam Saima</option>
                  <option value="Mam Rabiya">Mam Rabiya</option>
                  <option value="Sir Hammad">Sir Hammad</option>
                  <option value="Sir Altaf">Sir Altaf</option>
                </select>
              </div>

              {/* Title */}
              <div>
                <label htmlFor="title" className="block font-medium text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter FYP Title"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label htmlFor="description" className="block font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  required
                  placeholder="Describe your project in detail"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Advantages */}
              <div>
                <label htmlFor="advantages" className="block font-medium text-gray-700 mb-1">
                  Advantages
                </label>
                <textarea
                  id="advantages"
                  name="advantages"
                  value={formData.advantages}
                  onChange={handleChange}
                  rows="2"
                  required
                  placeholder="Mention the advantages of your project"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Tools */}
              <div>
                <label htmlFor="tools" className="block font-medium text-gray-700 mb-1">
                  Tools
                </label>
                <input
                  type="text"
                  id="tools"
                  name="tools"
                  value={formData.tools}
                  onChange={handleChange}
                  required
                  placeholder="Enter tools/technologies you will use"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold shadow-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Submit FYP Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FypForm;
