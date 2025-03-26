import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import bg from '../../assets/Img/back.jpg';
import { FaCheckCircle, FaEye, FaEyeSlash } from 'react-icons/fa'; // Import check and eye icons
import googleimg from '../../assets/Img/google.svg'
import './SignUp.css'
export default function Signup() {
  const [name, setName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [section, setSection] = useState("");
  const [semester, setSemester] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConditions, setPasswordConditions] = useState({
    length: false,
    capital: false,
    number: false,
    symbol: false,
  });
  const [showConditions, setShowConditions] = useState(false); // New state for showing conditions
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log({ name, regNumber, section, semester, email, password });
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const validatePassword = (password) => {
    setPassword(password);
    setShowConditions(true); // Show conditions when typing
    setPasswordConditions({
      length: password.length >= 8,
      capital: /[A-Z]/.test(password),
      number: /\d/.test(password),
      symbol: /[!@#$%^&*]/.test(password),
    });
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }} // Set background image
    >
      <div className="bg-white my-20 font-montserrat rounded-lg shadow-lg p-8 max-w-md w-full opacity-95">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => validatePassword(e.target.value)} // Validate password on change
                required
                className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                className="absolute right-2 text-gray-600 top-3"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />} {/* Show eye icon based on state */}
              </button>
            </div>
          </div>

          {/* Password Conditions */}
          {showConditions && (
            <div className="mt-2">
              <p className={`flex items-center ${passwordConditions.length ? 'text-green-500' : 'text-red-500'}`}>
                {passwordConditions.length && <FaCheckCircle className="mr-1" />} 
                Enter minimum 8 characters
              </p>
              <p className={`flex items-center ${passwordConditions.capital ? 'text-green-500' : 'text-red-500'}`}>
                {passwordConditions.capital && <FaCheckCircle className="mr-1" />} 
                At least one capital letter
              </p>
              <p className={`flex items-center ${passwordConditions.number ? 'text-green-500' : 'text-red-500'}`}>
                {passwordConditions.number && <FaCheckCircle className="mr-1" />} 
                At least one number
              </p>
              <p className={`flex items-center ${passwordConditions.symbol ? 'text-green-500' : 'text-red-500'}`}>
                {passwordConditions.symbol && <FaCheckCircle className="mr-1" />} 
                At least one special symbol
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Registration Number</label>
            <input
              type="text"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              required
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Section</label>
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              required
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Semester</label>
            <input
              type="text"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              required
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-lightgraycolor text-white rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>



<button type="button" className="googlebtnandtext">
              <img src={googleimg} alt="Google" />
              <p>Continue With Google</p>
            </button>


        </form>
        <div className="text-center mt-4">
          <p className="text-sm">
            I already have an account?{" "}
            <span 
              onClick={handleLoginClick} 
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
