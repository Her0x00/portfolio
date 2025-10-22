"use client"
import React from 'react'
import { Github } from 'lucide-react'

export default function Footer() {
    return (
        <section className="mt-15">
            <div className="flex justify-around">
                <div className="flex flex-col gap-3">
                    <h2>Her0x Portfolio</h2>
                    <p className="text-sm text-gray-500">Computer Science student passionate about creating <br />digital experiences that make a difference.</p>
                    <Github className='size-4 mt-2 ml-2' />
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <ul className="flex flex-col gap-2 mt-3 text-sm text-gray-600">
                        <li className="hover:text-black cursor-pointer"><a href="#about">About</a></li>
                        <li className="hover:text-black cursor-pointer"><a href="#skills">Skills</a></li>
                        <li className="hover:text-black cursor-pointer"><a href="#projects"></a>Projects</li>
                    </ul>
                </div>
                <div>
                    <h2>Let's Connect</h2>
                    <p className="text-gray-400 text-sm mt-2">Check out my work and connect with me on GitHub</p>
                    <a target='_blank' href="https://github.com/Her0x00"><button className="bg-black text-white px-3 py-1.5 rounded-md mt-3">View GitHub</button></a>
                </div>
            </div>
            <hr className="border-t border-gray-300 w-full mt-10" />
        </section>
    )
}
