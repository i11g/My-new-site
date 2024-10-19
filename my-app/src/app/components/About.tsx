import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <Card className="bg-white text-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Hello! I'm Ivan Georgiev, a passionate Product Engineer and QA Automation Specialist with over 15 years of experience in the tech industry. I specialize in building efficient processes, developing robust QA automation frameworks, and creating innovative solutions to complex problems.
            </p>
            <p className="mb-4">
              My expertise spans across various domains, including:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>QA Automation (Selenium, Cypress, TestCafe)</li>
              <li>.NET Development</li>
              <li>Product Management</li>
              <li>Agile Methodologies</li>
              <li>CI/CD Implementation</li>
            </ul>
            <p className="mb-4">
              I'm constantly learning and adapting to new technologies, always looking for ways to improve processes and deliver high-quality software products.
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Download CV
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About