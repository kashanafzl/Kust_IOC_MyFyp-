import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay styles
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay module
import mainimg from '../../assets/Img/back.jpg';
import mainimg2 from '../../assets/Img/k1.jpeg';
import mainimg3 from '../../assets/Img/k22.png';
import mainimg4 from '../../assets/Img/k33.png';
import mainimg5 from '../../assets/Img/k5.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../home/Navbar/Navbar';


export default function About() {

  
    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);
  
    


  return (
    <>

<Navbar/>
<div className="w-full">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // 3 sec auto-slide
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg2} alt="Slide 1" className="w-full h-full object-cover" />
            <div  data-aos="fade-up" className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 data-aos="fade-up" className="text-3xl text-[70px] font-bold">About IOC</h2>
              <p className="text-lg pt-10 max-w-2xl">A place where innovation meets creativity. Step into a world of limitless possibilities and excellence.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg3} alt="Slide 2" className="w-full h-full object-cover" />
            <div data-aos="fade-down" className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 data-aos="fade-down" className="text-3xl text-[70px] font-bold">Innovate & Elevate</h2>
              <p className="text-lg pt-10 max-w-2xl">Pushing the boundaries of technology and design to create a better tomorrow.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg4} alt="Slide 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl text-[70px] font-bold">Your Vision, Our Mission</h2>
              <p className="text-lg pt-10 max-w-2xl">We bring ideas to life with cutting-edge solutions tailored to your needs.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg5} alt="Slide 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl text-[70px] font-bold">Transforming the Future</h2>
              <p className="text-lg pt-10 max-w-2xl">Empowering businesses and individuals to reach new heights of success.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[91vh]">
            <img src={mainimg} alt="Slide 5" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
              <h2 className="text-3xl text-[70px] font-bold">Join the Revolution</h2>
              <p className="text-lg pt-10 max-w-2xl">Be a part of a movement that redefines innovation, creativity, and progress.</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>

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

    </>

  );
}
