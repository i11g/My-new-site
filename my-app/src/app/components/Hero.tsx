import React from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Hello, I'm <span className="text-yellow-300">Ivan Georgiev</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl">
            A passionate developer with expertise in project management, QA automation testing, and .NET development.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button asChild className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                <Link href="/projects">View My Projects</Link>
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button asChild className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero