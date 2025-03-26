import React from 'react';
import { FaFutbol, FaRunning, FaSwimmer, FaBasketballBall } from 'react-icons/fa';
import swimmingimg from '../../assets/Img/swimming.jpg'
import football from '../../assets/Img/football.jpg'
import running from '../../assets/Img/running.jpg'
import tugofwar from '../../assets/Img/war.jpg'
import basketball from '../../assets/Img/basket.jpg'
export default function Sport() {
  const sportsEvents = [
    {
      id: 1,
      title: 'Football Championship',
      date: 'March 25, 2025',
      icon: <FaFutbol className="text-3xl text-white" />,
      bg: 'bg-gradient-to-r from-green-400 to-green-600',
      image: football,
    },
    {
      id: 2,
      title: 'Track & Field Meet',
      date: 'April 5, 2025',
      icon: <FaRunning className="text-3xl text-white" />,
      bg: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
      image: running,
    },
    {
      id: 3,
      title: 'Swimming Gala',
      date: 'April 20, 2025',
      icon: <FaSwimmer className="text-3xl text-white" />,
      bg: 'bg-gradient-to-r from-blue-400 to-blue-600',
      image: swimmingimg,
    },
    {
      id: 4,
      title: 'Basketball Tournament',
      date: 'May 10, 2025',
      icon: <FaBasketballBall className="text-3xl text-white" />,
      bg: 'bg-gradient-to-r from-red-400 to-red-600',
      image: basketball,
    },
    {
      id: 5,
      title: 'Tug Of War',
      date: 'May 10, 2025',
      icon: <FaBasketballBall className="text-3xl text-white" />,
      bg: 'bg-gradient-to-r from-red-400 to-red-600',
      image: tugofwar,
    },
  ];

  return (
    <div className="min-h-screen font-poppins bg-gray-100 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🏆 Upcoming Sports Events</h1>
          <p className="text-gray-600">Check out our exciting lineup of upcoming sports events!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sportsEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${event.bg} mb-4`}>
                  {event.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
                <p className="text-gray-500 text-sm mt-1">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
