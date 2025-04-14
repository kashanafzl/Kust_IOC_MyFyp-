import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations

import bg from '../../assets/Img/back.jpg'; 

export default function Forgotpassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
    // You can handle API call here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
         style={{ backgroundImage: `url(${bg})` }}>
      <motion.div
        className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="text-center">
          <motion.h1
            className="text-3xl font-bold text-[#880C24] mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Forgot Password
          </motion.h1>
          <motion.p
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Enter your registered email to receive a password reset link.
          </motion.p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
            <motion.input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#880C24] transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#880C24] hover:bg-[#611A1B] text-white font-semibold py-3 rounded-lg transition duration-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Send Reset Link
          </motion.button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Remembered your password?{' '}
          <Link to="/login">
            <motion.span
              className="text-[#880C24] hover:underline font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Go back to Login
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
