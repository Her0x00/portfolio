"use client "
import React from 'react'
import ProjectCard from './ProjectCard'
import { Github } from 'lucide-react'

export default function Projects() {
    return (
        <>
            <section id="projects" className="w-full bg-white py-18 px-7 md:px-12 lg:px-24">
                <div>
                    {/* Section header */}
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='text-3xl md:text-4xl font-semibold'>Featured Projects</h2>
                        <p className='text-center mt-5 text-gray-500'>Here are some of the projects I've worked on recently. Each project represents a unique <br /> challenge and learning opportunity in my development journey.</p>
                    </div>

                    {/* Projects Cards */}
                    <div className='mt-8 flex flex-wrap gap-12 justify-center items-start'>
                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <ProjectCard
                                image="/images/project1.jpg"
                                title="Dice Rolling Game"
                                description="A short game where you can roll a dice and try to get the highest score possible. Score is saved in a database. Built with React and TypeScript."
                                projectUrl="https://github.com/Her0x00/dice-rolling-game"
                                technologies={["React", "TypeScript", "NeonDB", "Tailwind CSS"]}
                            />
                        </div>

                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <ProjectCard
                                image="/images/project1.jpg"
                                title="Dice Rolling Game"
                                description="A short game where you can roll a dice and try to get the highest score possible. Score is saved in a database. Built with React and TypeScript."
                                projectUrl="https://github.com/Her0x00/dice-rolling-game"
                                technologies={["React", "TypeScript", "NeonDB", "Tailwind CSS"]}
                            />
                        </div>

                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <ProjectCard
                                image="/images/project1.jpg"
                                title="Dice Rolling Game"
                                description="A short game where you can roll a dice and try to get the highest score possible. Score is saved in a database. Built with React and TypeScript."
                                projectUrl="https://github.com/Her0x00/dice-rolling-game"
                                technologies={["React", "TypeScript", "NeonDB", "Tailwind CSS"]}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-12 flex-col gap-2">
                    <h2 className="text-gray-500">Want to see more of my work?</h2>
                    <a
                        href="https://github.com/Her0x00?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
                    >
                        <Github className="text-xl" />
                        <span>View All Projects on GitHub</span>
                    </a>
                </div>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
        </>
    )
}
