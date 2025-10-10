"use client "
import React from 'react'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
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
        </section>
    )
}
