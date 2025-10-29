"use client"
import React from 'react'
import { Github } from 'lucide-react'

export default function Footer() {
    return (
        <section className="mt-15 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-4 max-w-6xl mx-auto">
                {/* Portfolio Description */}
                <div className="flex flex-col gap-3 text-center md:text-left w-full md:w-1/3">
                    <h2 className="text-xl font-semibold">Her0x Portfolio</h2>
                    <p className="text-sm text-gray-500">
                        Computer Science student passionate about creating
                        digital experiences that make a difference.
                    </p>
                    <a href="https://github.com/Her0x00"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center md:justify-start">
                        <Github className='size-5 hover:text-gray-700' />
                    </a>
                </div>

                {/* Quick Links */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
                    <ul className="flex flex-col gap-2 text-sm text-gray-600">
                        <li className="hover:text-black transition-colors">
                            <a href="#about">About</a>
                        </li>
                        <li className="hover:text-black transition-colors">
                            <a href="#skills">Skills</a>
                        </li>
                        <li className="hover:text-black transition-colors">
                            <a href="#projects">Projects</a>
                        </li>
                    </ul>
                </div>

                {/* Let's Connect */}
                <div className="text-center md:text-left w-full md:w-1/3">
                    <h2 className="text-xl font-semibold">Let&apos;s Connect</h2>
                    <p className="text-gray-500 text-sm mt-2">
                        Check out my work and connect with me on GitHub
                    </p>
                    <a
                        target='_blank'
                        href="https://github.com/Her0x00"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-black text-white px-4 py-2 rounded-md mt-3 hover:bg-gray-800 transition-colors w-full md:w-auto">
                            View GitHub
                        </button>
                    </a>
                </div>
            </div>
            <hr className="border-t border-gray-300 w-full mt-10" />
        </section>
    )
}
