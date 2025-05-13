import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaPhoneSquare, FaFacebookSquare, FaInstagramSquare , FaLinkedin } from "react-icons/fa";
const MainPage = () => {
  return (
    <div className="w-full text-black mt-5 px-5 flex justify-center">
      <div className="flex justify-between items-center w-full ">
        
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <IoMdContact className="text-lg text-orange-500" />
            <p className="text-xs ml-0.5 font-bold">Suite Sign In</p>
          </div>
          <div className="flex items-center">
            <FaPhoneSquare className="text-lg ml-2 text-orange-500" />
            <p className="text-sm ml-0.5 font-semibold">(800) 123-4567</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <FaFacebookSquare className="text-lg" />
          <FaInstagramSquare className="text-lg" />
          <FaLinkedin className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
