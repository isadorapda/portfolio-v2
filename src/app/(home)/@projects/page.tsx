'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BsArrowRight as IconArrowRight } from 'react-icons/bs'
import { SELECTED_PROJECTS } from '@/constants/contents'
import { SingleProject } from '@/components/Projects/Project'

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const singleProject = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
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
    }, projectsRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={projectsRef}
      className="wrapper flex-col bg-secondaryBackground dark:bg-darkPrimaryBackground p-mobile sm:py-[20vh] "
      id="projects"
    >
      <div
        className="w-screen h-[20vh] absolute left-0 top-0"
        id="trigger-projects"
      />
      <h1 className="section-header text-[5vw]">
        Some things that I&apos;ve built
      </h1>
      <div
        id="stagger"
        className="w-full px-[3vw] flex flex-col gap-[20vh] pt-[20vh] pb-[10vh]"
      >
        {SELECTED_PROJECTS.map((project) => {
          return <SingleProject key={project.id} project={project} />
        })}
      </div>
      <div className="w-full  mb-[10vh] ">
        <Link
          href={'/all-projects'}
          className="flex justify-center items-center gap-3 hover:scale-125 transition-all ease-in-out duration-200"
        >
          {' '}
          All projects <IconArrowRight className="" />{' '}
        </Link>
      </div>
    </section>
  )
}
