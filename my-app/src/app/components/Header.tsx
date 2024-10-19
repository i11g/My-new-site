import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-2xl font-bold">Ivan Georgiev</h1>
            <p className="text-sm text-gray-600">Product Engineer | QA Automation Specialist</p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#about" className="hover:text-purple-600 transition-colors">About</Link></li>
              <li><Link href="#education" className="hover:text-purple-600 transition-colors">Education</Link></li>
              <li><Link href="#experience" className="hover:text-purple-600 transition-colors">Experience</Link></li>
              <li><Link href="#projects" className="hover:text-purple-600 transition-colors">Projects</Link></li>
              <li><Link href="#publications" className="hover:text-purple-600 transition-colors">Publications</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header