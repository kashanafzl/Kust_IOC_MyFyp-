// import React, { useState } from 'react';

// function FypForm() {
//   const [formData, setFormData] = useState({
//     supervisor: '',
//     title: '',
//     description: '',
//     advantages: '',
//     tools: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data Submitted:', formData);
//     // Submit logic here
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">FYP Request Form</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Supervisor Selection */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Select Supervisor</label>
//           <select
//             name="supervisor"
//             value={formData.supervisor}
//             onChange={handleChange}
//             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           >
//             <option value="">-- Select Supervisor --</option>
//             <option value="Supervisor 1">Supervisor 1</option>
//             <option value="Supervisor 2">Supervisor 2</option>
//             <option value="Supervisor 3">Supervisor 3</option>
//           </select>
//         </div>

//         {/* FYP Title */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             placeholder="Enter FYP Title"
//             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         {/* FYP Description */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="4"
//             placeholder="Describe your project in detail"
//             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         {/* Advantages */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Advantages</label>
//           <textarea
//             name="advantages"
//             value={formData.advantages}
//             onChange={handleChange}
//             rows="3"
//             placeholder="Mention the advantages of your project"
//             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         {/* Tools */}
//         <div>
//           <label className="block text-lg font-medium text-gray-700">Tools</label>
//           <input
//             type="text"
//             name="tools"
//             value={formData.tools}
//             onChange={handleChange}
//             placeholder="Enter the tools/technologies you will use"
//             className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
//           >
//             Submit FYP Request
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default FypForm;
import React, { useState } from 'react';

function FypForm() {
  const [formData, setFormData] = useState({
    supervisor: '',
    title: '',
    description: '',
    advantages: '',
    tools: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add submit logic here (API call, etc.)
  };

  return (
    <div id='mldivscreen' className="px-4 w-[70%] py-8 md:py-12 lg:py-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">FYP Request Form</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Supervisor */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Select Supervisor</label>
              <select
                name="supervisor"
                value={formData.supervisor}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
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
              <label className="block text-lg font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter FYP Title"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-lg font-medium text-gray-700 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Describe your project in detail"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Advantages */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Advantages</label>
              <textarea
                name="advantages"
                value={formData.advantages}
                onChange={handleChange}
                rows="3"
                placeholder="Mention the advantages of your project"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            {/* Tools */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Tools</label>
              <input
                type="text"
                name="tools"
                value={formData.tools}
                onChange={handleChange}
                placeholder="Enter the tools/technologies you will use"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              Submit FYP Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FypForm;
