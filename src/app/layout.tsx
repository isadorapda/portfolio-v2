import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Exo, Michroma } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from '@/components/Navigation/ThemeSwitcher'
import { NavBar } from '@/components/Navigation/NavBar'

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-roboto',
})

const exo = Exo({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-exo',
})
const michroma = Michroma({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-michroma',
})

export const metadata: Metadata = {
  title: `Isadora's Portfolio`,
  description:
    'I am a full-stack software developer based in London. Unleashing Tech Potential for Positive Change | TypeScript, React, Next.js, Node.js Developer | Making a Difference Through Code',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable}  ${exo.variable} ${michroma.variable} `}
      >
        <ThemeProvider attribute="class">
          <NavBar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
