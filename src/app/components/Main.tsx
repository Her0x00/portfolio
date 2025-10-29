"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function MainPage() {
  return (
    <div id="top" className='flex justify-center items-center min-h-screen text-black px-4 py-8 mt-16 sm:mt-0 sm:py-12'>
      < div className='flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto' >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className='flex flex-col text-center lg:text-left'
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold'>Hi, i'm Her0x</h1>
          <p className='text-xl md:text-2xl mt-4 mb-4 text-gray-500'>Computer Science Student & Web Developer</p>
          <p className='text-gray-500 text-sm md:text-base'>
            I'm passionate about creating digital experiences that make
            <br className='hidden md:block' /> a difference. Currently studying Computer Science and building
            <br className='hidden md:block' /> projects that solve real-world problems.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 justify-center lg:justify-start'
          >
            <a href="#projects" rel="noopener noreferrer" className='w-full sm:w-auto'>
              <button className='w-full sm:w-auto border border-black bg-black text-white py-2 px-6 hover:bg-gray-800 rounded-md transition ease-in-out duration-250 font-semibold'>
                View My Work
              </button>
            </a>
            <a href="https://github.com/Her0x00" target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto'>
              <button className='w-full sm:w-auto border border-gray-400 text-black py-2 px-6 rounded-md hover:bg-gray-200 transition ease-in-out duration-250 font-semibold'>
                GitHub Profile
              </button>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='w-full max-w-sm lg:max-w-md'
        >
          <img
            src="/images/bmw.png"
            alt="bmw-car"
            className='w-full h-auto object-contain border rounded-lg lg:translate-x-0'
          />
        </motion.div>
      </div >
    </div >
  )
}
