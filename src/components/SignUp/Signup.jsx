import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import bg from "../../assets/Img/back.jpg";
import { FaCheckCircle, FaEye, FaEyeSlash } from "react-icons/fa";
import googleimg from "../../assets/Img/google.svg";
import "./SignUp.css";

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
  const [showConditions, setShowConditions] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate empty fields
    if (!name || !regNumber || !section || !semester || !email || !password) {
      toast.error("Please fill in all the fields");
      return;
    }

    // Check if password meets all conditions
    const allConditionsMet = Object.values(passwordConditions).every(Boolean);
    if (!allConditionsMet) {
      toast.error("Please meet all password conditions");
      return;
    }

    // Simulate success
    toast.success("Successfully Registered!");
    console.log({ name, regNumber, section, semester, email, password });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const validatePassword = (password) => {
    setPassword(password);
    setShowConditions(true);
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
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white my-20 font-montserrat rounded-lg shadow-lg p-8 max-w-md w-full opacity-95"
      >
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
                onChange={(e) => validatePassword(e.target.value)}
                required
                className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 text-gray-600 top-3"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          {showConditions && (
            <div className="mt-2 text-sm">
              <p
                className={`flex items-center ${
                  passwordConditions.length ? "text-green-500" : "text-red-500"
                }`}
              >
                {passwordConditions.length && (
                  <FaCheckCircle className="mr-1" />
                )}
                Enter minimum 8 characters
              </p>
              <p
                className={`flex items-center ${
                  passwordConditions.capital ? "text-green-500" : "text-red-500"
                }`}
              >
                {passwordConditions.capital && (
                  <FaCheckCircle className="mr-1" />
                )}
                At least one capital letter
              </p>
              <p
                className={`flex items-center ${
                  passwordConditions.number ? "text-green-500" : "text-red-500"
                }`}
              >
                {passwordConditions.number && (
                  <FaCheckCircle className="mr-1" />
                )}
                At least one number
              </p>
              <p
                className={`flex items-center ${
                  passwordConditions.symbol ? "text-green-500" : "text-red-500"
                }`}
              >
                {passwordConditions.symbol && (
                  <FaCheckCircle className="mr-1" />
                )}
                At least one special symbol
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">
              Registration Number
            </label>
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-[#880C24] text-white rounded-md transition"
          >
            Submit
          </motion.button>

          <motion.button
            type="button"
            className="googlebtnandtext flex justify-center items-center gap-2 w-full mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={googleimg} alt="Google" className="w-5 h-5" />
            <p>Continue With Google</p>
          </motion.button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            I already have an account?{" "}
            <span
              onClick={handleLoginClick}
              className="text-[#880C24] hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
