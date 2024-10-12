import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}