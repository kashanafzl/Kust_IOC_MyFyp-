import React from 'react';
import Navbar from './Navbar/Navbar';
import Mainsection from './Mainsection/Mainsection';
// import Card from './Card/Card';
import Apply from './Apply/Apply';
import Feature from './AddFeatures/Feature';
import { RiWhatsappFill } from "react-icons/ri";

import chatbotimg from '../../assets/Img/chatbotimg.png'
import Footer from './Footer/Footer';

function Home() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/923459643395", "_blank"); // Open WhatsApp in a new tab
  };

  return (
    <div className='bgcolor'>
      <div className='whatsappicondiv' onClick={handleWhatsAppClick}>
        <RiWhatsappFill className='whatsppicon' />
      </div>

      <div>
        <img className='chatbotimg' src={chatbotimg} alt="" />
      </div>

      <Navbar />
      <Mainsection />
      {/* <Card/> */}
      <Apply />
      <Feature />
      <Footer/>
    </div>
  );
}

export default Home;
