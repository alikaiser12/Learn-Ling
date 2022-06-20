import React from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='lg:gap-5 grid grid-cols-2 ml-6'>
      <div className=''>
        <p>copyright@learning.com</p>
      </div>
      <div className='grid grid-cols-4 lg:gap-5 mb-4'>
         {/* Social icons */}
      
      
          
          
          <div>
            <a
              className='flex justify-between items-center w-full bg-[#6fc2b0] text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
            </div>
          <div>
            <a
              className='flex justify-between items-center w-full  bg-blue-600 text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30}  />
            </a>
            </div>
          <div>
            <a
              className='flex justify-between items-center w-full bg-[#333333] text-gray-300'
              href='/'
            >
              Github <FaGithub size={30}  />
            </a>
            </div>
          <div>
            <a
              className='flex justify-between items-center w-full bg-[#565f69] text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
            </div>
         
      </div>
      </div>
 
  )
}

export default Footer