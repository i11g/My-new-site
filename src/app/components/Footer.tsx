import React from 'react'
import { Button } from '@/app/components/ui/button'
import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p className="mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Ivan Georgiev. All rights reserved.</p>
        <Button variant="outline" className="bg-blue-500 hover:bg-blue-600 text-white border-white">
          <Mail className="mr-2 h-4 w-4" /> Contact Me
        </Button>
      </div>
    </footer>
  )
}

export default Footer