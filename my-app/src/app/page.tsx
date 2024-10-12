import React from 'react'
import Hero from '@/app/components/Hero'
import Link from 'next/link'
import AboutMe from '@/app/components/AboutMe'
import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/app/components/ui/card'
import { User, BookOpen, Briefcase, Code, FileText } from 'lucide-react'

const HomePage = () => {
  return (
    <div>
      <Hero />       
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2" /> About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Passionate developer with expertise in multiple fields, focusing on QA Automation and .NET development.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Continuous learner with a strong academic background in various disciplines.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Education</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" /> Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Over 15 years of experience in bringing diverse projects to life and optimizing efficiency.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Experience</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2" /> Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>A showcase of my most recent and impactful projects across various domains.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Explore Projects</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2" /> Publications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>My contributions to academic and professional publications in various fields.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Publications</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage