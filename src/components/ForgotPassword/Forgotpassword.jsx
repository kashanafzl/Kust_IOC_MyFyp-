import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import bg from '../../assets/Img/back.jpg'; 

export default function Forgotpassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
    // You can handle API call here
  };

  return (
    <div  className="flex items-center justify-center min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 space-y-6 animate-fade-in">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password</h1>
          <p className="text-gray-500 text-sm">Enter your registered email to receive a password reset link.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Remembered your password?{' '}
          <Link to = "/login">
          <span  className="text-indigo-600 hover:underline font-medium">
            Go back to Login
          </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
