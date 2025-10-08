"use client"
import React from 'react'
import Image from 'next/image'

export function MainPage() {
  return (
    <div className='flex justify-center items-center h-screen text-black gap-4'>
      <div className='flex flex-row'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <h1 className='text-6xl'>Hi, i'm Her0x</h1>
        <p className='text-2xl mt-4 mb-4 text-gray-500'>Computer Science Student & Web Developer</p>
        <p className='text-gray-500'>I'm passionate about creating digital experiences that make <br /> a difference. Currently studying Computer Science and building <br />projects that solve real-world problems.</p>
        <div className='flex gap-6 mt-4'>
          <div>
            <button className='border border-black bg-black text-white h-9 px-3 hover:bg-gray-800 rounded-md transition ease-in-out duration-250 font-semibold'>View My Work</button>
          </div>
          <div>
            <button 
              className='border border-gray-400 text-black h-9 px-3 rounded-md hover:bg-gray-200 transition ease-in-out duration-250 font-semibold'>GitHub Profile</button>
          </div>
        </div>
        </div>
      </div>
      <img 
          src="/images/bmw.png" 
          alt="bmw-car"
          className='w-full h-full max-w-md object-contain border rounded-lg translate-x-20'
          />
    </div>
  </div>
  )
}
