import React from 'react';
import { IoMdContact } from 'react-icons/io';
import { FaPhoneSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const MainPage = ({ contactItems = [], socialLinks = [] }) => {
  return (
    <div className="w-full text-black mt-5 px-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {contactItems.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <item.icon className="text-xl" />
              <p className="text-sm ml-2">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-9">
          {socialLinks.map((social, idx) => (
            <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer">
              <social.icon className="text-xl hover:text-orange-600 transition" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
