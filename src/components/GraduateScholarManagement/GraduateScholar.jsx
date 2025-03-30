import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

function GraduateScholar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    degreeProgram: '',
    researchInterest: '',
    publications: '',
    cv: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData((prev) => ({ ...prev, cv: file }));
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    setSubmitted(true);

    // You can now send `formData` to your backend or Firebase here
    // using Axios, fetch, or Firebase storage
  };

  return (
    <div className="w-[90%] md:w-[70%] mx-auto   mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Graduate Scholar Management
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Scholar Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Scholar's Full Name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter Contact Number"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Degree Program */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Degree Program
            </label>
            <input
              type="text"
              name="degreeProgram"
              value={formData.degreeProgram}
              onChange={handleChange}
              placeholder="e.g., Ph.D. in Wireless Networks"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Research Interests */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Research Interests
            </label>
            <textarea
              name="researchInterest"
              value={formData.researchInterest}
              onChange={handleChange}
              rows="4"
              placeholder="Enter Research Interests"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Publications */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Publications
            </label>
            <textarea
              name="publications"
              value={formData.publications}
              onChange={handleChange}
              rows="4"
              placeholder="List recent publications or write 'None'"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* CV Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Upload CV (PDF Only)
            </label>
            <label className="flex items-center gap-3 cursor-pointer bg-indigo-50 border border-dashed border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 transition">
              <FiUploadCloud className="text-indigo-500 text-2xl" />
              <span className="text-gray-600">
                {formData.cv ? formData.cv.name : 'Choose PDF file'}
              </span>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white p-4 rounded-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Submit Scholar Details
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <p className="text-green-600 font-semibold text-center mt-4">
              Scholar details submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default GraduateScholar;
