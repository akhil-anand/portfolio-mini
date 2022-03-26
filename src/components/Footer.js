import React from 'react';
import {FaGithub, FaYoutube, FaEnvelope, FaTwitter} from 'react-icons/fa';
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className='py-5 border-t-3/2'>
        <div className='flex justify-center mt-4'>    
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/akhil-anand">
            <FaGithub/>
            <span className="sr-only">Github</span>
            </a>

            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/akhil-anand">
            <AiFillLinkedin/>
            <span className="sr-only">Youtube</span>
            </a>

            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/akhil-anand">
            <FaTwitter/>
            <span className="sr-only">Twitter</span>
            </a>

            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/akhil-anand">
            <FaEnvelope/>
            <span className="sr-only">Gmail</span>
            </a>


        </div>
        <div className='flex justify-center mt-4'>
            <p className='text-black mb-4'>
                Made with <span className='mr-2' role='link' aria-label='heart'>💙</span>by <a className='text-blue-500 hover:underline' href='mailto:akhilanand.ak01@gmail.com'>Akhil Anand</a>
            </p>
        </div>
    </div>
  )
}

export default Footer