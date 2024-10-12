import React from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

const Header = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Ivan Georgiev
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {['About', 'Education', 'Experience', 'Projects', 'Publications', 'Skills'].map((item) => (
              <li key={item}>
                <Button variant="ghost" asChild>
                  <Link href={`/${item.toLowerCase()}`} className="text-white hover:text-blue-400">
                    {item}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header