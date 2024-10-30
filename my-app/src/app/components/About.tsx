import React from 'react'
import { Card, CardContent} from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"

const About = () => {
  return (
    <section id="about" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Get To Know Me</h1>
        <Card className="bg-gradient-to-br from-purple-900 to-blue-900 text-white  border-2 border-purple-800">
          <CardContent>
            <p className="mb-4">
            Hi! My name is Ivan Georgiev, and I&apos;m passionate about exploring different fields, ranging from project development and supramolecular chemistry to computer science and QA automation. 
            This unique blend of interests allows me to approach challenges from multiple angles and drive innovation. 
            Recently, I started to utilize my knowledge of business processes and project development to build applications that transform workflows and enhance efficiency.
              </p>
            <p className="mb-4">
            During my work, I try to foster an atmosphere of creativity, where laughter and collaboration ignite a spark of innovation 😅.
            </p>
            <p className="mb-4">
              I&apos;m constantly learning and adapting to new technologies, always looking for ways to improve processes and deliver high-quality projects.
            </p>
            {/* <Button className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700">
              Download CV
            </Button> */}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default About