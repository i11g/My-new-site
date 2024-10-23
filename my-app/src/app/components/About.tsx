import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

const About = () => {
  return (
    <section id="about" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Get To Know Me</h1>
        <Card className="bg-gradient-to-br from-purple-900 to-blue-900 text-white  border-2 border-purple-800">
          <CardContent>
            <p className="mb-4">
              Welcome! I'm Ivan Georgiev, and have a passion for exploring different fields, ranging from project management and supramolecular chemistry to computer science and QA Automation testing.  
              I specialize in building efficient processes, developing robust QA automation frameworks, and creating innovative solutions to complex problems. while tackling a wide array of business challenges
            </p>
            <p className="mb-4">
              My expertise spans across various domains, including:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4">
              <li>Project Managment</li>
              <li>Process Development</li>
              <li>QA Automation (Selenium, Cypress, TestCafe)</li>
              <li>CI/CD Implementation</li>
            </ul>
            <p className="mb-4">
              I'm constantly learning and adapting to new technologies, always looking for ways to improve processes and deliver high-quality projects.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700">
              Download CV
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About