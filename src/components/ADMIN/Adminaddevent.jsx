import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Adminaddevent() {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEventData({
      ...eventData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Event submitted:', eventData);
    toast.success('New sports event added successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
    });

    setEventData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      image: null,
    });

    document.getElementById('imageUpload').value = '';
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-poppins">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-[#880C24] mb-6">
          Add New Sports Event
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium">Event Title</label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Description</label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium">Date</label>
              <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Time</label>
              <input
                type="time"
                name="time"
                value={eventData.time}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Image</label>
            <div className="relative w-full">
              <label
                htmlFor="imageUpload"
                className="cursor-pointer flex items-center justify-center px-4 py-2 bg-[#880C24] text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
              >
                Choose Image
              </label>
              <input
                id="imageUpload"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
                className="hidden"
              />
              {eventData.image && (
                <p className="mt-2 text-sm text-gray-600">
                  Selected: {eventData.image.name}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#880C24] text-white py-2 rounded-lg font-semibold transition"
          >
            Add Event
          </button>
        </form>
      </div>

      {/* React Toastify Container */}
      <ToastContainer />
    </div>
  );
}
