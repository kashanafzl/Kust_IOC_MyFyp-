// import React, { useState, useEffect } from 'react';
// import mainimg from '../../../assets/Img/5.jpg';

// export default function Mainsection() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const slides = [
    
//     {
//       title: 'Welcome to IOC',
//       subtitle: 'Total Excellence'
//     },
//     {
//       title: 'Innovate with Us',
//       subtitle: 'Leading the Future'
//     },
//     {
//       title: 'Achieve Greatness',
//       subtitle: 'Together We Rise'
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="relative z-10  overflow-hidden">
//       <img src={mainimg} alt="Main Background" className="w-full h-screen object-cover relative z-0" />

//       {/* Overlay with custom clip-path */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gray-500 opacity-60 z-10 clip-path-polygon"></div>

//       <div className="absolute top-10 left-5 text-darkbluecolor z-20 text-center">
//         <h1 className="text-7xl md:text-5.5xl text-black font-bold">
//           {slides[currentIndex].title}
//         </h1>
//         <h2 className="text-2xl mt-4 md:text-xl text-black font-semibold">
//           {slides[currentIndex].subtitle}
//         </h2>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module
import mainimg from '../../../assets/Img/back.jpg';
import mainimg2 from '../../../assets/Img/p1.jpg';
import mainimg3 from '../../../assets/Img/p2.jpg';
import mainimg4 from '../../../assets/Img/p4.jpg';
import mainimg5 from '../../../assets/Img/p5.jpg';

export default function App() {
  return (
    <div className="w-full">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 sec auto-slide
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg} alt="Slide 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl text-[70px] font-bold">Welcome to IOC</h2>
              <p className="text-lg pt-10 max-w-2xl">A place where innovation meets creativity. Step into a world of limitless possibilities and excellence.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg2} alt="Slide 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl text-[70px] font-bold">Innovate & Elevate</h2>
              <p className="text-lg pt-10 max-w-2xl">Pushing the boundaries of technology and design to create a better tomorrow.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg3} alt="Slide 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl text-[70px] font-bold">Your Vision, Our Mission</h2>
              <p className="text-lg pt-10 max-w-2xl">We bring ideas to life with cutting-edge solutions tailored to your needs.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg4} alt="Slide 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl text-[70px] font-bold">Transforming the Future</h2>
              <p className="text-lg pt-10 max-w-2xl">Empowering businesses and individuals to reach new heights of success.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg5} alt="Slide 5" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl text-[70px] font-bold">Join the Revolution</h2>
              <p className="text-lg pt-10 max-w-2xl">Be a part of a movement that redefines innovation, creativity, and progress.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
