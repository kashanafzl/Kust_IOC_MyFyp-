// pages/BsAdmission.js
import React from "react";
import { motion } from "framer-motion";

const BsAdmission = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#fce8ec] to-[#f9f9f9] font-montserrat px-6 py-12">
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h1
          className="text-4xl font-bold text-[#880C24] text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Bachelor's Admission (BS)
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 text-center mb-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          Explore our undergraduate programs, admission criteria, and start your journey.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-2xl font-semibold text-[#880C24] mb-4">
              Eligibility Criteria
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Minimum 60% in Intermediate or equivalent.</li>
              <li>Must pass the university's entry test.</li>
              <li>Age limit: 22 years (relaxation up to 1 year may apply).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#880C24] mb-4">
              Required Documents
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Matric & Intermediate Certificates</li>
              <li>CNIC / B-Form</li>
              <li>Domicile</li>
              <li>Passport Size Photos</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="/"
            className="inline-block bg-[#880C24] hover:bg-[#6f0a1e] text-white text-lg font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BsAdmission;
