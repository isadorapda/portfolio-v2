'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ABOUT_ME, techStackSkills } from '@/constants/contents'
import { useEffect, useRef } from 'react'
import { parallaxSection } from '@/utils/parallaxSection'
import { TechSkills } from '@/components/Skills/TechSkills'

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const responsiveAnimation = gsap.matchMedia()
      responsiveAnimation.add('(min-width:1024px)', () => {
        gsap.from('.section-header', {
          ease: 'power2.in',
          xPercent: 100,
          scrollTrigger: {
            trigger: '#trigger-skills',
            start: 'top bottom-=10%',
            end: 'bottom top+=20%',
            scrub: 1,
          },
        })
        gsap.from('#additional-infos', {
          yPercent: 20,
          duration: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: '#beyond-tech',
            start: 'top bottom-=10%',
            end: 'bottom bottom-=10%',
            scrub: 2,
          },
        })
      })
    }, skillsRef)
    return () => ctx.revert()
  }, [])
  useEffect(() => {
    parallaxSection('#skills', '#projects')
  }, [])
  return (
    <section
      id="skills"
      ref={skillsRef}
      className="wrapper flex-col gap-[8vh] p-mobile pb-[20vh] lg:pt-[10vh] lg:pb-[15vh] lg:px-[10vw] lg:flex-row justify-center items-center bg-primaryBackground dark:bg-darkPrimaryColor"
    >
      <div
        className="w-screen h-[20vh] absolute left-0 top-0"
        id="trigger-skills"
      />
      <h1 className="section-header lg:right-[15vw]">skills</h1>

      <div className="flex flex-col gap-5 pt-[5vh] lg:pt-[20vh] lg:pb-[10vh] w-full lg:w-[50%]">
        <p>
          I thrive on crafting dynamic and robust web applications, and my
          toolkit is finely curated to reflect this passion.
        </p>
        <div className="flex flex-col gap-5 w-full ">
          {techStackSkills.map((skill, index) => (
            <TechSkills key={`${skill}-${index}`} skillArea={skill} />
          ))}
        </div>
      </div>
      <div
        id="additional-infos"
        className="w-full flex flex-col items-center lg:gap-[10vw] lg:pt-[25vh] lg:pb-[10vh] lg:w-[40%]"
      >
        <div
          id="beyond-tech"
          className="w-full text-textBodyMobile leading-bodyMobile font-roboto lg:leading-body lg:text-textBody text-contrastPrimaryColor dark:text-darkContrastPrimaryColor"
        >
          <h3 className="mb-3 font-semibold font-michroma text-textHeaderSmall lg:text-[1.5vw]">
            Beyond Tech...
          </h3>
          <p>{ABOUT_ME.skillsTransferable}</p>
        </div>
      </div>
      <div className="absolute bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 w-full lg:w-[40%] px-[10vw]">
        <button className="flex items-center justify-center w-full px-3 py-2 rounded-md border border-tertiaryColor text-textBody font-exo font-thin hover:font-normal hover:text-tertiaryColor transition-all duration-200 ease-in-out">
          Download my CV
        </button>
      </div>
    </section>
  )
}
