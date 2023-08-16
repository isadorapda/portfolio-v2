'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BsArrowRight as IconArrowRight } from 'react-icons/bs'
import { SELECTED_PROJECTS } from '@/constants/contents'
import { SingleProject } from '@/components/Projects/Project'

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const responsiveAnimation = gsap.matchMedia()
      responsiveAnimation.add('(min-width:1024px)', () => {
        gsap.from('.project', {
          stagger: 1,
          yPercent: 15,
          opacity: 0,
          duration: 2,
          ease: 'back',
          scrollTrigger: {
            trigger: '#stagger',
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
          },
        })
      })
    }, projectsRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={projectsRef}
      className="wrapper flex-col bg-secondaryBackground dark:bg-darkSecondaryBackground p-mobile pb-[10vh]"
      id="projects"
    >
      <h1 className="section-header text-[8vw] md:text-[5vw] w-[80vw] md:w-max lg:left-1/2 lg:-translate-x-1/2">
        Some things that I&apos;ve built
      </h1>
      <div
        id="stagger"
        className="w-full px-[3vw] flex flex-col gap-[10vh] lg:pt-[10vh] pb-[10vh]"
      >
        {SELECTED_PROJECTS.map((project) => {
          return <SingleProject key={project.id} project={project} />
        })}
      </div>
      <div className="w-full flex items-center justify-center">
        <Link href={'/all-projects'} className="buttons">
          All projects <IconArrowRight />
        </Link>
      </div>
    </section>
  )
}
