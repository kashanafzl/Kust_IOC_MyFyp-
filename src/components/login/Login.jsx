import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/Img/back.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';

import googleimg from "../../assets/Img/google.svg";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    
    // Show alert on submission

    // Optionally navigate after login (uncomment if needed)
    // navigate('/dashboard');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot_password'); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white font-montserrat rounded-lg shadow-lg p-8 max-w-md w-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-[#880C24] font-bold text-center mb-6"
        >
          Login
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
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
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-600 focus:outline-none"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
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

          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <span
              onClick={handleSignupClick}
              className="text-[#880C24] hover:underline cursor-pointer"
            >
              Sign up
            </span>
          </p>

          {/* Forgot password link */}
          <p className="text-sm text-right mt-4">
            <span
              onClick={handleForgotPasswordClick}
              className="text-[#880C24] hover:underline cursor-pointer"
            >
              Forgot password?
            </span>
          </p>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Login;
