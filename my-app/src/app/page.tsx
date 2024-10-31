"use client"
import React, { useState, useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Education from '@/app/components/Education';
import Publications from '@/app/components/Publications';
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
})

const HomePage = () => {
  const [text, setText] = useState('');
  const fullText = "I build processes and bring projects to life.";

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0;
      const typingTimer = setInterval(() => {
        setText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(typingTimer);
        }
      }, 20);

      return () => clearInterval(typingTimer);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-8">
          <h1 className="text-7xl font-bold mb-6 animate-fade-in-down">
            Hey, I&apos;m Ivan.
          </h1>
          <h2 className="text-[3rem] mb-12 relative h-[1.5em] italic">
            <span className={`absolute left-0 right-0 overflow-hidden whitespace-nowrap ${dancingScript.className}`}>
              {text}
            </span>
            <span className={`invisible ${dancingScript.className}`}>
              {fullText}
            </span>
          </h2>
          
          <p className="text-2xl mb-8 opacity-0 animate-fade-in animation-delay-4000">
            Developing projects and optimizing processes with a focus on efficiency and innovation.
          </p>
          
          <p className="text-2xl mb-8 opacity-0 animate-fade-in animation-delay-4000">
            Building big ideas that make impact.
          </p>
          
          <a href="#projects" className="bg-green-500 text-purple-900 px-16 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 mb-8 inline-block opacity-0 animate-fade-in animation-delay-4250" style={{ marginTop: '20px' }}>
            Projects
          </a>
          
          {/* Social Icons */}

          <div className="flex justify-center items-center space-x-8 opacity-0 animate-fade-in animation-delay-4500 mt-28">
            <a href="https://www.linkedin.com/in/ivan-georgiev-7a97151b7" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/i11g" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-all duration-300 ease-in-out">
              <Github size={24} />
            </a>           
           
          </div>
        </div>
      </section>

      <About />
      <Experience />
      <Projects />
      <Education />
      <Publications />
    </div>
  );
};

export default HomePage;