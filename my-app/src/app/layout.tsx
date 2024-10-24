import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ivan Georgiev - Personal Website',
  description: 'Personal website of Ivan Georgiev, showcasing projects, publications, and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>             
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900">
          <main className="text-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
