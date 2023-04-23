import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata = {
  title: {
    template: ' % | Jonathan Steele',
    default: 'Jonathan Steele',
  },
  description: 'Software developer & developer advodate',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable}`}>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative flex h-full flex-1 flex-col">
          <Header />
          <main>{children}</main>
          <Analytics />
        </div>
      </body>
    </html>
  )
}
