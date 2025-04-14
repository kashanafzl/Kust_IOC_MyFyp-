import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import swimmingimg from '../../assets/Img/swimming.jpg';
import football from '../../assets/Img/football.jpg';
import running from '../../assets/Img/running.jpg';
import tugofwar from '../../assets/Img/war.jpg';
import basketball from '../../assets/Img/basket.jpg';
// import Navbar from '../home/Navbar/Navbar';

export default function Sport() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    department: '',
    semester: '',
    registrationNumber: '',
    specialization: '',
  });

  const sportsEvents = [
    {
      title: 'Swimming Competition',
      description: 'Compete with the best in our swimming race.',
      image: swimmingimg,
      date: '2025-04-10',
      time: '10:00 AM',
      location: 'School Pool',
    },
    {
      title: 'Football Match',
      description: 'Join the ultimate football challenge.',
      image: football,
      date: '2025-04-12',
      time: '3:00 PM',
      location: 'Main Ground',
    },
    {
      title: 'Running Race',
      description: 'Speed, endurance, and glory await.',
      image: running,
      date: '2025-04-14',
      time: '9:00 AM',
      location: 'Track Field',
    },
    {
      title: 'Tug of War',
      description: 'Test your strength in teams.',
      image: tugofwar,
      date: '2025-04-15',
      time: '1:00 PM',
      location: 'Ground B',
    },
    {
      title: 'Basketball Match',
      description: 'Bring your A-game to the court.',
      image: basketball,
      date: '2025-04-16',
      time: '4:00 PM',
      location: 'Basketball Court',
    },
  ];

  const handleClose = () => {
    setSelectedEvent(null);
    setShowForm(false);
    setFormData({
      fullName: '',
      department: '',
      semester: '',
      registrationNumber: '',
      specialization: '',
    });
  };

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('You have successfully applied for the event!');
    handleClose();
  };

  return (
    <>

    {/* <Navbar/> */}
    <div className="min-h-screen font-poppins bg-gray-100 px-4 py-12 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#880C24]">Sports Events</h1>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {sportsEvents.map((event, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-600 text-sm">{event.description}</p>
                <p className="text-xs text-gray-500 mt-2">
                  <strong>Date:</strong> {event.date}<br />
                  <strong>Time:</strong> {event.time}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-8 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-1 right-3 text-[30px] text-gray-500 hover:text-red-500"
              >
                &times;
              </button>
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedEvent.title}</h2>
              <p className="text-gray-600 mb-2">{selectedEvent.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-6">
                <p><strong>Date:</strong> {selectedEvent.date}</p>
                <p><strong>Time:</strong> {selectedEvent.time}</p>
                <p><strong>Location:</strong> {selectedEvent.location}</p>
              </div>

              {!showForm ? (
                <motion.button
                  onClick={handleApplyClick}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                  whileTap={{ scale: 0.95 }}
                >
                  Apply for Event
                </motion.button>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Enter Your Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {['fullName', 'department', 'semester', 'registrationNumber', 'specialization'].map((field, i) => (
                      <input
                        key={i}
                        type="text"
                        name={field}
                        placeholder={field.replace(/([A-Z])/g, ' $1')}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium"
                  >
                    Submit Application
                  </button>
                </motion.form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    </>
  );
}
