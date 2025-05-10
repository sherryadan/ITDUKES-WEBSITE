import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaPhoneSquare, FaFacebookSquare, FaInstagramSquare , FaLinkedin } from "react-icons/fa";
const MainPage = () => {
  return (
    <div className="w-full text-black mt-5 px-5">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <IoMdContact className="text-xl" />
            <p className="text-sm ml-2">Suite Sign In</p>
          </div>
          <div className="flex items-center">
            <FaPhoneSquare className="text-xl ml-2" />
            <p className="text-sm ml-2">(800) 123-4567</p>
          </div>
        </div>

        <div className="flex items-center gap-9">
          <FaFacebookSquare className="text-xl" />
          <FaInstagramSquare className="text-xl" />
          <FaLinkedin className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
