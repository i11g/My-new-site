import React from 'react'
import Hero from '@/app/components/Hero'
import { Button } from '@/app/components/ui/button'

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg mb-4">
            With a passion for exploring different fields, I've developed expertise in project management,
            supramolecular chemistry, computer science, and QA Automation testing.
          </p>
          <p className="text-lg mb-4">
            Currently, I'm focusing my learning journey on QA Automation testing and .NET development.
          </p>
          <Button variant="outline" className="mt-4">Learn More</Button>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <p className="text-lg mb-4">
            With over 15 years of experience, I've brought to life diverse projects, focused on
            optimizing efficiency and tackling a wide array of business challenges.
          </p>
          <Button variant="outline" className="mt-4">View My Experience</Button>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <p className="text-lg mb-4">
            Here you can find a selection of my most recent and impactful projects.
          </p>
          <Button variant="outline" className="mt-4">Explore Projects</Button>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <p className="text-lg mb-4">
            My diverse skill set includes project management, QA automation, .NET development, and more.
          </p>
          <Button variant="outline" className="mt-4">View All Skills</Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage