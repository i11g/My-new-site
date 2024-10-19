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
            <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">Hey, I'm Ivan.</h1>
            <h2 className="text-4xl mb-8 animate-fade-in-up">I build processes</h2>
            <p className="text-xl max-w-2xl mx-auto animate-fade-in">
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
        {/* Content Sections */}             
         
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-purple-800 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Code className="mr-2" /> Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>A showcase of my most recent and impactful projects across various domains.</p>
              </CardContent>
            </Card>
          </div>
        </section>
  
        <section id="publications" className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-purple-800 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="mr-2" /> Publications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>My contributions to academic and professional publications in various fields.</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      
    </div>
  )
}

export default HomePage