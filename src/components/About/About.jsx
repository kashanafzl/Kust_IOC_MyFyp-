import React from 'react';

export default function About() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-[#880C24] mb-4">
          Welcome to the IOC KUST Portal System
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          The <span className="font-semibold text-[#880C24]">IOC KUST Portal</span> is an all-in-one digital platform designed for Kohat University of Science and Technology (KUST) to streamline academic and administrative processes for students, teachers, and management.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">About Us</h2>
        <p className="text-gray-600 mb-6">
          Our portal simplifies tasks such as chatbot-based query handling, final year project tracking, and exam management — ensuring smooth communication, transparency, and productivity across departments.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Core Features</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          <li><strong>Chatbot:</strong> Instant support for student and faculty queries, available 24/7.</li>
          <li><strong>Final Year Project Management:</strong> Submit topics, get supervisor approvals, and track project progress efficiently.</li>
          <li><strong>Exam Management:</strong> Access schedules, results, and manage exam-related documentation online.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
        <p className="text-gray-600">
          To build a modern academic ecosystem at KUST using technology that empowers both students and educators, enhancing the overall learning and administrative experience.
        </p>
      </div>
    </div>
  );
}
