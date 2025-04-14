import React, { useEffect } from 'react';
import './Student.css';
import panelimg from '../../../assets/Img/panel.svg';
import { FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Studentprocess() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="student-container">
      <div className="studentprocessdiv" data-aos="fade-down">
        <h1>Student FYP Process and <br /> Assistance from Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at massa sit amet nisi blandit vehicula adipiscing elit.</p>
      </div>

      <div className="studentfypandprocessflexdiv">
        <div className="fypprocessimg" data-aos="fade-right">
          <img src={panelimg} alt="Process Illustration" />
        </div>

        <div className="process-steps" data-aos="fade-left">
          <h3><FaCheckCircle className="icon" /> Complete everything as ordered</h3>
          <h3><FaCheckCircle className="icon" /> Provide your last exam result</h3>
          <h3><FaCheckCircle className="icon" /> Choose your desired program</h3>
          <h3><FaCheckCircle className="icon" /> Get contact with the instructor</h3>
          <h3><FaCheckCircle className="icon" /> Finally get started with your program</h3>
        </div>
      </div>
    </div>
  );
}
