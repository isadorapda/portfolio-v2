'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { parallaxSection } from '@/utils/parallaxSection'

export default function Home() {
  const homeContainer = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { opacity: 0, duration: 1, ease: 'back' } })
        .from('.text', {
          y: 100,
          stagger: 0.3,
        })
        .from(
          '.intro-text',
          {
            y: 80,
            duration: 1,
            stagger: 0.3,
          },
          '-=1'
        )
    }, homeContainer)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    parallaxSection('#homepage', '#about-me')
  }, [])

  return (
    <section
      id="homepage"
      className="flex relative flex-col items-center text-contrastPrimaryColor dark:text-darkContrastPrimaryColor"
      ref={homeContainer}
    >
      <div className="w-screen h-screen flex flex-col justify-center relative gap-[3vh]">
        <div className="text">
          {'full'.split('').map((char, index) => (
            <div key={`${char}-${index}`}>{char}</div>
          ))}
        </div>
        <div className="text">
          {'-stack'.split('').map((char, index) => (
            <div key={`${char}-${index}`}>{char}</div>
          ))}
        </div>
        <div className="text">
          {'developer'.split('').map((char, index) => (
            <div key={`${char}-${index}`}>{char}</div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-screen flex items-center">
        <div className="relative my-0 mx-auto p-[10vw] flex flex-col justify-center font-exo w-full h-screen">
          <div className="h-[20vw] opacity-100">
            <h3 className="text-[5vw] font-light intro-text">
              Hello, I&apos;m{' '}
            </h3>
            <h1 className="text-[13vw] m-0 intro-text">Isadora</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
