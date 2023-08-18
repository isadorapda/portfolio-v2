import '../globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto, Exo, Michroma } from 'next/font/google'
import { ThemeProvider } from '../theme-provider'
import { Footer } from '@/components/Footer'

const roboto = Roboto({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
})
const exo = Exo({
  weight: ['100', '300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-exo',
})
const michroma = Michroma({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-michroma',
})

export const metadata: Metadata = {
  title: `Isadora's Portfolio - All Projects`,
  description:
    'I am a full-stack software developer based in London. Unleashing Tech Potential for Positive Change | TypeScript, React, Next.js, Node.js Developer | Making a Difference Through Code',
}

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable}  ${exo.variable} ${michroma.variable} `}
      >
        <ThemeProvider attribute="class">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
