"use client"
import React from 'react'
import { ExternalLink } from 'lucide-react'

interface ProjectCardProps {
    image: string
    title: string
    description: string
    link?: string
    technologies?: string[]
    projectUrl: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    image,
    title,
    description,
    technologies = [],
    projectUrl
}) => {
    return (
        <div className='bg-white border max-w-xl w-1xl border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            {/* Project image */}
            <img
                src={image}
                alt={title}
                className='w-full h-44 object-cover'
            />

            {/* Content */}
            <div className='p-6'>
                <h3 className='text-lg font-semibold mb-2'>{title}</h3>
                <p className='text-sm text-gray-600 mb-4'>{description}</p>

                {/* Tags / Technologies */}
                <div className='flex font-semibold flex-wrap gap-2 mb-4'>
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className='text-xs bg-gray-100 px-2 py-1 rounded-md'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-flex items-center text-sm text-white bg-black w-full h-9 justify-center rounded-xl'
                >
                    <ExternalLink className='w-4.5 h-4.5 mr-4' />
                    View Project
                </a>
            </div>
        </div>
    )
}

export default ProjectCard
