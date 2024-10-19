import React from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card'
import { User, BookOpen, Briefcase, Code, FileText } from 'lucide-react'
import About from '@/app/components/About'
import Education from '@/app/components/Education';
import Experience from '@/app/components/Experience';
import Projects from '@/app/components/Projects';
import Publications from '@/app/components/Publications';

const HomePage = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 opacity-0 animate-fade-in-down">
              Hey, I'm Ivan.
            </h1>
            <h2 className="text-4xl mb-8 opacity-0 animate-fade-in-up animation-delay-500">
              I build projects, I make cool things.
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-1000">
              Entrepreneurial guy working with product development, design and low/no-code. 
              Building small tools and big ideas. Currently working as a Product Engineer at Heimstaden.
            </p>
          </div>
        </section>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Publications />              
      </div>
    </div>
  )
}

export default HomePage