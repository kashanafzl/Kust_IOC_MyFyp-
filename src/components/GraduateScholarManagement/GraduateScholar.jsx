import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

function GraduateScholar() {
  const [formData, setFormData] = useState({
    scholarName: '',
    degreeProgram: '',
    researchInterest: '',
    publications: '',
    pdfFile: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFormData({ ...formData, pdfFile: file });
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Handle file upload with formData.pdfFile
  };

  return (
    <div id='mldivscreen' className="w-[70%] mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Graduate Scholar Management
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Scholar Name */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Scholar Name
            </label>
            <input
              type="text"
              name="scholarName"
              value={formData.scholarName}
              onChange={handleChange}
              placeholder="Enter Scholar's Name"
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
              placeholder="Enter Degree Program (e.g., Ph.D. in Wireless Networks)"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Research Interest */}
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Research Interest
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
              placeholder="Enter Publications"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Upload PDF */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Upload Scholar CV (PDF)
            </label>
            <label className="flex items-center gap-3 cursor-pointer bg-indigo-50 border border-dashed border-indigo-300 rounded-lg p-4 hover:bg-indigo-100 transition">
              <FiUploadCloud className="text-indigo-500 text-2xl" />
              <span className="text-gray-600">
                {formData.pdfFile ? formData.pdfFile.name : 'Choose PDF file'}
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
        </form>
      </div>
    </div>
  );
}

export default GraduateScholar;
