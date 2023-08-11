'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { TbMoon as IconDarkMode, TbSun as IconLightMode } from 'react-icons/tb'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className={`flex justify-center items-center transition-all ease-in-out duration-300`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <IconDarkMode /> : <IconLightMode />}
    </button>
  )
}
