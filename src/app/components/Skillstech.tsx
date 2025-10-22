import React from 'react'

const skillcardProps = {
    frontend: ["HTML/CSS", "Typescript", "Tailwind CSS", "JavaScript", "React", "Next.js"],
    backend: ["Node.js", "Express.js", "MongoDB", "SQL"],
    tools: ["Git", "GitHub", "VS code", "Figma"],
    Concepts: ["Responsive Design", "RESTful APIs", "Authentication", "Testing"]
}

const CurrentlyLearning = {
    learning: ["Machine Learning", "Linux", "Docker", "Cybersecurity"]
}

export default function Skillstech() {
    return (
        <section id="skills" className="w-full bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 py-26">
                <h2 className="text-4xl font-semibold text-center mb-6 w-full">Skills & Technologies</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
                    Here are some of the technologies and skills I have experience with:
                </p>

                { /* Frontend and backend skill card */}

                <div className='flex flex-row md:flex-row gap-10'>
                    {/* Frontend Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm w-full md:w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Frontend</h2>
                        <div className="flex flex-wrap gap-3">
                            {skillcardProps.frontend.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-0.5 bg-gray-200 text-gray-800 text-sm rounded-md font-medium border border-gray-200 hover:bg-gray-200 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Backend Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm w-full md:w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Backend</h2>
                        <div className="flex flex-wrap gap-3">
                            {skillcardProps.backend.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-0.5 bg-gray-200 text-gray-800 text-sm rounded-md font-medium border border-gray-200 hover:bg-gray-200 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Second row */}

                <div className='flex flex-row md:flex-row gap-10 mt-6'>

                    {/* Tools Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm w-full md:w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Tools</h2>
                        <div className="flex flex-wrap gap-3">
                            {skillcardProps.tools.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-0.5 bg-gray-200 text-gray-800 text-sm rounded-md font-medium border border-gray-200 hover:bg-gray-200 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Concept card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm w-full md:w-1/2">
                        <h2 className="text-lg font-semibold mb-4">Concepts</h2>
                        <div className="flex flex-wrap gap-3">
                            {skillcardProps.Concepts.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-0.5 bg-gray-200 text-gray-800 text-sm rounded-md font-medium border border-gray-200 hover:bg-gray-200 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
                <div className="flex items-center justify-center flex-col mt-10">
                    <h2 className='text-gray-500'>Currently Learning</h2>
                    <div className='flex gap-3 mt-4'>
                        {CurrentlyLearning.learning.map(v => (
                            <span
                                key={v}
                                className="px-3 py-0.5 gap  text-black text-sm rounded-md font-semibold border border-gray-400 hover:bg-gray-200 transition"
                            >
                                {v}
                            </span>
                        ))}
                    </div>
                </div>


            </div>
        </section >
    )
}
