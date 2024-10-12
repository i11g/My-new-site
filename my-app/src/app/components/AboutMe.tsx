import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/app/components/ui/card'
import { Button } from '@/app/components/ui/button'
import { MapPin, Twitter, Github, Instagram } from 'lucide-react'

const AboutMe = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="lg:w-1/3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Image
                    src="/api/placeholder/200/200" // Replace with your actual image path
                    alt="Ivan Georgiev"
                    width={200}
                    height={200}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-2xl font-semibold mb-2">Ivan Georgiev</h3>
                  <p className="text-gray-600 text-center mb-4">
                    I thrive on curiosity and love to dive deep into different fields and subjects.
                  </p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Sofia</span>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-2/3">
            <Card>
              <CardContent className="p-6">
                <p className="text-lg mb-4">
                  With a passion for exploring different fields, ranging from{' '}
                  <span className="text-blue-600">project management</span> and{' '}
                  <span className="text-blue-600">supramolecular chemistry</span>, to{' '}
                  <span className="text-blue-600">computer science</span> and{' '}
                  <span className="text-blue-600">QA Automation testing</span>, I'm focusing currently my{' '}
                  <span className="text-blue-600">learning journey</span> on QA Automation testing and .NET development.
                </p>
                <p className="text-lg mb-4">
                  During my 15+ years of <span className="text-blue-600">experience</span>, I've brought to life diverse
                  projects, focused on optimizing efficiency and tackling a wide array of business challenges.
                </p>
                <p className="text-lg mb-6">
                  My goal is to cultivate an atmosphere of enjoyment and creativity within every team and project, 
                  where the fusion of laughter and creativity ignites a spark of innovation and creativity.
                </p>
                <Button className="w-full sm:w-auto">How we can connect?</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe