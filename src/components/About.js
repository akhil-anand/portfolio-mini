import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import { FaChevronDown } from 'react-icons/fa';

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto" >
        <p className='text-2xl text-black md:text-4xl font-bold text-center '>
            Hey!👋
        </p>
        <p className='text-base text-gray-600 sm:text-xl font-bold text-center leading-relaxed mt-4'>
            I am a passionate Web and React Developer. I love learning new stack and implementing them in the applications.
        </p>

        <ScrollIntoView selector="#tech">
            <div className='mx-auto p-3'>
                <FaChevronDown className='animate-bounce mx-auto text-3xl text-blue-500'></FaChevronDown>
            </div>
        </ScrollIntoView>

    </div>
  )
}

export default About;
