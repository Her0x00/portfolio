"use client"
import React from 'react'

export function MainPage() {
  return (
    <div className='flex justify-center items-center h-screen text-black gap-4'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <h1 className='text-6xl'>Hi, i'm Her0x</h1>
        <p className='text-2xl mt-4 mb-4 text-gray-500'>Computer Science Student & Web Developer</p>
        <p>I'm passionate about creating digital experiences that make <br /> a difference. Currently studying Computer Science and building <br />projects that solve real-world problems.</p>
        <div className='flex gap-6 mt-4'>
          <button className='bg-black text-white'>View My Work</button>
          <button className='border border-black p-[10px]'>GitHub Profile</button>
        </div>
        </div>
      </div>
    </div>
  )
}
