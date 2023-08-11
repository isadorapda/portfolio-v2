'use client'
import { useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

export function useWindowWidth() {
  let initialWidth = 0
  if (typeof window !== 'undefined') {
    initialWidth = window.innerWidth
  }
  const [width, setWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth)
      }
      const debouncedHandleResize = debounce(handleResize, 300)

      window.addEventListener('resize', debouncedHandleResize)

      return () => {
        window.removeEventListener('resize', debouncedHandleResize)
      }
    }
  }, [])
  return width
}
