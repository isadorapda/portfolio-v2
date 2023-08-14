'use client'

import { RiArrowDropRightFill as IconArrow } from 'react-icons/ri'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ABOUT_ME } from '@/constants/contents'
import { useEffect, useRef } from 'react'
import { parallaxSection } from '@/utils/parallaxSection'

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const responsiveAnimation = gsap.matchMedia()
      responsiveAnimation.add('(min-width:768px)', () => {
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
        gsap.from('.animate-tech', {
          y: 50,
          stagger: 0.3,
          opacity: 0,
          duration: 2,
          scrollTrigger: {
            trigger: '#tech-skills-grid',
            start: 'top bottom',
            end: 'bottom bottom-=28%',
            scrub: 1,
            toggleActions: 'play reset play restart',
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
      className="wrapper flex-col gap-[8vh] p-mobile lg:py-[10vh] lg:px-[10vw] lg:flex-row justify-center items-center bg-primaryBackground"
    >
      <div
        className="w-screen h-[20vh] absolute left-0 top-0"
        id="trigger-skills"
      />
      <h1 className="section-header left-[10vw]">skills</h1>
      <div className="flex flex-col gap-[15vh] pt-[5vh] lg:pt-[25vh] lg:pb-[10vh] w-full lg:w-[60%]">
        <div
          id="tech-skills-grid"
          className="grid grid-cols-[repeat(2,_minmax(auto,_1fr))] auto-rows-auto items-center lg:items-start gap-[2vw]"
        >
          {ABOUT_ME.skillsTech.map((tech) => (
            <h3
              key={tech}
              className="text-[17px] leading-body w-full sm:text-textBody lg:text-[1.5vw] font-medium flex items-center text-start font-roboto animate-tech"
            >
              {' '}
              <IconArrow className="text-tertiaryColor" /> {tech}
            </h3>
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
    </section>
  )
}
