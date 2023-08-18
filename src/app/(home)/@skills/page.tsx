'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { techStackSkills } from '@/constants/contents'
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
          xPercent: 150,
          opacity: 0,
          scrollTrigger: {
            trigger: '#trigger-skills',
            start: 'top bottom-=10%',
            end: 'center top+=15%',
            scrub: 1,
          },
        })
        gsap.from('.tech-group', {
          stagger: 1,
          yPercent: 15,
          opacity: 0,
          duration: 2,
          ease: 'back',
          scrollTrigger: {
            trigger: '#tech-skills-container',
            start: 'top bottom-=20%',
            end: 'bottom bottom-=10%',
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
      className="wrapper flex-col lg:flex-row justify-center items-center gap-[8vh] p-mobile lg:pt-[10vh] lg:pb-[15vh] bg-primaryBackground dark:bg-darkPrimaryColor"
    >
      <div
        aria-hidden="true"
        className="w-screen h-[20vh] absolute left-0 top-0"
        id="trigger-skills"
      />
      <h1 className="section-header lg:right-[15vw]">skills</h1>

      <div
        id="tech-skills-container"
        className="flex flex-col gap-10 md:pt-[7vh] lg:pt-[8vh] lg:pb-[10vh] w-full lg:w-[50%]"
      >
        <p className="text-textBody lg:text-textHeaderSmall text-center lg:text-left">
          I build reusable and maintainable code, excelling in crafting dynamic
          and robust web applications. My toolkit is finely curated to reflect
          this passion.
        </p>
        <div className="flex flex-col gap-5 w-full">
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
          className="w-full text-textBodyMobile text-justify lg:text-left leading-bodyMobile lg:leading-body lg:text-textBody"
        >
          <h3 className="mb-3 font-semibold font-exo text-textHeaderSmall">
            Beyond Tech...
          </h3>
          <p className="mb-2">
            One of the greatest advantages of transitioning to a new career is
            the array of <strong>transferable skills</strong> I bring. These
            include excellent
            <strong>
              {' '}
              interpersonal communication, creative problem-solving, analytical
              thinking, and strong time-management abilities.
            </strong>{' '}
            I am confident that harnessing these skills will elevate my
            effectiveness as a developer.
          </p>
          <p>
            My diverse experiences allow me to{' '}
            <strong>
              approach challenges from unique angles, bringing a fresh
              perspective.
            </strong>{' '}
            I am constantly pushing myself to learn more and expand my digital
            toolset and thrive in environments that foster high standards and
            prioritise quality outcomes.
          </p>
        </div>
      </div>
      <div className="absolute bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 w-full lg:w-[40%] px-[10vw]">
        <button className="buttons">Download my CV</button>
      </div>
    </section>
  )
}
