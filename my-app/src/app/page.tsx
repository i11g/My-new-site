"use client"
import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Education from '@/app/components/Education';
import Publications from '@/app/components/Publications';

const HomePage = () => {
  const [text, setText] = useState('');
  const fullText = "I build processes and make projects.";

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
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-5xl mx-auto px-8">
          <h1 className="text-7xl font-bold mb-6 animate-fade-in-down">
            Hey, I'm Ivan.
          </h1>
          <h2 className="text-4xl mb-10 relative h-[1.5em] italic">
            <span className="absolute left-0 right-0 overflow-hidden whitespace-nowrap handwriting-animation">
              {text}
            </span>
            <span className="invisible">{fullText}</span>
          </h2>
          
          <p className="text-2xl mb-8 opacity-0 animate-fade-in animation-delay-4000">
            Entrepreneurial guy working on projects development, focused on optimizing efficiency and tackling a wide array of business challenges.
            Building big ideas.
          </p>
          
          <a href="#projects" className="bg-white text-purple-900 px-6 py-2 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 mb-8 inline-block opacity-0 animate-fade-in animation-delay-4250">
            Projects
          </a>
          
          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-8 opacity-0 animate-fade-in animation-delay-4500">
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-all duration-300 ease-in-out">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-all duration-300 ease-in-out">
              <Github size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-all duration-300 ease-in-out">
              <Twitter size={24} />
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-all duration-300 ease-in-out">
              <Instagram size={24} />
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