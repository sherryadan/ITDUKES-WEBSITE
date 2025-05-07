import React from 'react'
import { IoMdContact } from "react-icons/io";
import { FaPhoneSquare, FaFacebookSquare, FaInstagramSquare , FaLinkedin } from "react-icons/fa";



const HomePage = () => {
  return (
    <div>
    <div className=' inline-flex w-full text-black mt-5 '>
    <IoMdContact className='text-xl ml-5' /> <p className='text-sm ml-2'>  Suite Sign In </p>
    <FaPhoneSquare  className='text-xl ml-5'/><p className='text-sm ml-2'> (800) 123-4567 </p>
    <div className='inline-flex'>
    <FaFacebookSquare className='text-xl ml-5'/>
    <FaInstagramSquare className='text-xl ml-5'/>
    <FaLinkedin className='text-xl ml-5'/>
    </div>
    </div>
    </div>

  )
}
 
export default HomePage
