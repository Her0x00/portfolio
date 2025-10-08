"use client";
import React from "react";
import { GraduationCap, Code, Heart } from "lucide-react";
import AboutSkillbar from "./AboutSkillbar";

export function About() {

    const skills = [
        { skill: "Problem Solving", level: 90 },
        { skill: "Team Collaboration", level: 90 },
        { skill: "Learning Agility", level: 85 },
    ]

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24 mt-24"
    >
      <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
        I have been studying computer science for the last 3 years, and I am passionate about web development and creating impactful digital experiences.
      </p>

      {/* Top row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition text-center">
          <GraduationCap className="w-10 h-10 mx-auto text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-600">
            Currently pursuing a Computer Science degree with a focus on web development and some cybersecurity.
Over the past 3 years, I’ve been learning to build secure and modern web applications.
          </p>
        </div>

        <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition text-center">
          <Code className="w-10 h-10 mx-auto text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-600">
            2+ years of hands-on experience building web applications.
          </p>
        </div>

        <div className="p-8 border rounded-xl shadow-sm hover:shadow-md transition text-center">
          <Heart className="w-10 h-10 mx-auto text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Passion</h3>
          <p className="text-gray-600">
            Love creating solutions that make people's lives easier and more enjoyable through technology.
          </p>
        </div>
      </div>

      {/* My Journey box */}
      <div className="bg-gray-100 p-10 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:w-2/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-3">My Journey</h3>
          <p className="text-gray-700 leading-relaxed">
            My journey in technology started with curiosity about how websites work.
            What began as simple HTML pages has evolved into a deep passion for web development and computer science.
            <br /><br />
            I believe in continuous learning and staying up-to-date with the latest technologies.
            When I'm not coding, you can find me learning new things, and exploring different types of coding languages, cybersecurity and everything that comes to computers.
          </p>
        </div>
        <div className=" max-w-md mx-auto mt-10">
            {skills.map((s) => (
                <AboutSkillbar key={s.skill} skill={s.skill} level={s.level} />
            ))}
        </div>
        
      </div>
    </section>
  );
}
