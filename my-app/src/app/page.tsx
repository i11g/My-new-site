import React from 'react'
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react'
import About from '@/app/components/About'
import Education from '@/app/components/Education'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import Publications from '@/app/components/Publications'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl font-bold mb-4 opacity-0 animate-fade-in-down">
            Hey, I'm Ivan.
          </h1>
          <h2 className="text-4xl mb-6 opacity-0 animate-fade-in-up animation-delay-500">
            I build projects, I make cool things.
          </h2>
          
          <p className="text-xl mb-8 opacity-0 animate-fade-in animation-delay-1000">
            Entrepreneurial guy working on projects development, focused on optimizing efficiency and tackling a wide array of business challenges.
            Building big ideas.
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center items-center space-x-6 opacity-0 animate-fade-in animation-delay-1000">
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
      <Education />
      <Experience />
      <Projects />
      <Publications />
    </div>
  )
}

export default HomePage