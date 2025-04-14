
import { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import f1 from "../../assets/Img/shafi.jpg";
import f2 from "../../assets/Img/sirmuneer.png";
import f3 from "../../assets/Img/sirirfan.jpg";
import f4 from "../../assets/Img/sirzeeshan.jpg";
import f5 from "../../assets/Img/qadeem.jpg";
import f6 from "../../assets/Img/sana.jpg";
import f7 from "../../assets/Img/mamsaima.jpg";
import f8 from "../../assets/Img/amjad.jpg";
import Navbar from "../home/Navbar/Navbar";



import AOS from 'aos';
import 'aos/dist/aos.css';

const facultyData = [
  {
    name: "Dr. Shafiullah Khan",
    title: "Professor",
    imgSrc: f1,
    page: "/drshafiullah",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. M. Muneer Umar",
    title: "Assistant Professor",
    imgSrc: f2,
    page: "/DrMuneerUmar",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. Amjad Mehmood",
    title: "Assistant Professor",
    imgSrc: f8,
    page: "/",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. M. Irfan Uddin",
    title: "Assistant Professor",
    imgSrc: f3,
    page: "/drirfan",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. Qadeem khan",
    title: "Assistant Professor",
    imgSrc: f5,
    page: "/drqadeem",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. Zeeshan Iqbal",
    title: "Assistant Professor",
    imgSrc: f4,
    page: "/drzeeshan",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. Saima Hassan",
    title: "Assistant Professor",
    imgSrc: f6,
    page: "/drsaima",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
  {
    name: "Dr. Sanaullah",
    title: "Assistant Professor",
    imgSrc: f7,
    page: "/drsanaullah",
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      email: "mailto:example@example.com",
      twitter: "https://twitter.com",
      whatsapp: "https://whatsapp.com",
    },
  },
];

function Faculty() {
  const navigate = useNavigate();

  const handleCardClick = (page) => {
    if (page) navigate(page);
  };


    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  
    
  

  return (
    <>
      <Navbar />
      <section data-aos="fade-up" className="py-20 px-6 md:px-16 bg-gradient-to-b from-white to-gray-100 font-montserrat min-h-screen">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          Meet Our Esteemed Faculty
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(faculty.page)}
              className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-xs transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={faculty.imgSrc}
                  alt={faculty.name}
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {faculty.name}
                </h3>
                <p className="text-gray-500 text-sm">{faculty.title}</p>

                <div className="flex justify-center space-x-4 mt-4 text-gray-600">
                  <a
                    href={faculty.socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-600 hover:scale-110 transition"
                  >
                    <FaFacebookF size={18} />
                  </a>
                  <a
                    href={faculty.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500 hover:scale-110 transition"
                  >
                    <FaLinkedinIn size={18} />
                  </a>
                  <a
                    href={faculty.socialLinks.email}
                    className="hover:text-red-500 hover:scale-110 transition"
                  >
                    <MdEmail size={20} />
                  </a>
                  <a
                    href={faculty.socialLinks.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400 hover:scale-110 transition"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href={faculty.socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-500 hover:scale-110 transition"
                  >
                    <IoLogoWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faculty;
