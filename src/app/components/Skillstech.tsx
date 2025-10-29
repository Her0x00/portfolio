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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-4">Skills & Technologies</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
                    Here are some of the technologies and skills I have experience with:
                </p>

                {/* Responsive grid for all cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Frontend Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillcardProps.frontend.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-white text-gray-800 text-xs sm:text-sm rounded-md font-medium border border-gray-200 hover:bg-gray-50 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillcardProps.backend.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-white text-gray-800 text-xs sm:text-sm rounded-md font-medium border border-gray-200 hover:bg-gray-50 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Tools Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillcardProps.tools.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-white text-gray-800 text-xs sm:text-sm rounded-md font-medium border border-gray-200 hover:bg-gray-50 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Concepts Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">Concepts</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillcardProps.Concepts.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-white text-gray-800 text-xs sm:text-sm rounded-md font-medium border border-gray-200 hover:bg-gray-50 transition"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Currently learning */}
                <div className="flex flex-col items-center justify-center mt-10">
                    <h3 className='text-gray-500 text-sm sm:text-base'>Currently Learning</h3>
                    <div className='flex flex-wrap gap-2 mt-4 justify-center'>
                        {CurrentlyLearning.learning.map(v => (
                            <span
                                key={v}
                                className="px-3 py-1 bg-white text-black text-xs sm:text-sm rounded-md font-semibold border border-gray-300 hover:bg-gray-50 transition"
                            >
                                {v}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
