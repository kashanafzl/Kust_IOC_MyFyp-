import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  return (
    <div id='mldivscreen' className="flex ml-12 w-full flex-col lg:flex-row gap-8 p-0 md:p-8 min-h-screen">
      
      {/* Left Side: User Info */}
      <div className="text-center p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold mb-2">User</h3>
        <p className="text-gray-500">User</p>

        <div className="mt-6 flex justify-center">
          <label htmlFor="imageInput" className="relative group cursor-pointer">
            <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center border border-gray-300 hover:bg-gray-300 transition">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="rounded-full w-24 h-24 object-cover"
                />
              ) : (
                <h5 className="text-sm font-semibold text-gray-600">Change Picture</h5>
              )}
            </div>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <button
          className="mt-6 py-3 px-8 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
          onClick={handleImageRemove}
        >
          Remove Photo
        </button>

        <div className="mt-4 bg-gray-100 p-4 rounded-lg text-sm text-gray-600 shadow-sm">
          <p>Maximum upload size is <span className="font-semibold">1 MB</span>.</p>
        </div>
      </div>

      {/* Right Side: Edit Profile */}
      <div className="bg-white p-4 md:p-4 rounded-lg shadow-lg flex-grow">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Edit Profile</h2>
          <p className="text-gray-500 border-b-2 border-blue-500 inline-block mt-2">User Info</p>
        </div>

        <div className="space-y-6">
          {/* User Info Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="User"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="**********"
                  className="w-full border border-gray-300 p-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span
                  className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="**********"
                  className="w-full border border-gray-300 p-3 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span
                  className="absolute top-4 right-3 text-gray-400 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div>
                <Link to="/forgot_password">
              <p className="text-indigo-600 font-montserrat pt-2 text-right cursor-pointer hover:underline">Forgot Password?</p>
              </Link>
            </div>
          </div>

            </div>

 

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                placeholder="KDA"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact</label>
              <input
                type="text"
                placeholder="+92 123456789"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="py-3 px-8 rounded-full bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition">
              Update Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
