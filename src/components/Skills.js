import React from 'react';
import {FaReact} from 'react-icons/fa';
import {SiJavascript, SiTailwindcss, SiAngular, SiTypescript} from 'react-icons/si';
import {FaNodeJs} from 'react-icons/fa';

function Skills() {
  return (
    <div className='max-w-4xl mx-auto justify-center py-12' id='tech'>
        <p className='text-2xl text-black text-center md:text-4xl pt-4 font-bold'>
            Tech I Use
        </p>
        <div className='flex flex-wrap justify-center'>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <FaReact color="#2196f3" className='mx-auto text-4xl animate-spin-slow'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>React</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiAngular color="#fc0324" className='mx-auto text-4xl animate-ping-slow'/>
                <SiAngular color="#ed1532" className='mx-auto text-4xl' style={{position:"relative", top:"-35px"}}/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center' style={{position:"relative", top:"-35px"}}>Angular</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiTailwindcss color="#00C0A3" className='mx-auto text-4xl animate-pulse'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>TailwindCSS</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiJavascript color="#ffdf00" className='mx-auto text-4xl animate-bounce'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>Javascript</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <SiTypescript color="#504bd1" className='mx-auto text-4xl animate-ping-slow'/>
                <SiTypescript color="#504bd1" className='mx-auto text-4xl' style={{position:"relative", top:"-35px"}}/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center' style={{position:"relative", top:"-35px"}}>Typescript</p>
            </div>
            <div className='flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52'>
                <FaNodeJs color="#39cc60" className='mx-auto text-4xl animate-bounce'/>
                <p className='mt-6 text-xl sm:text-2xl font-semibold text-center'>nodeJs</p>
            </div>
        </div>
    </div>
  )
}

export default Skills