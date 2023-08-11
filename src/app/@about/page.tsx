'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { RiArrowDropRightFill as IconArrow } from 'react-icons/ri'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import myPhoto from '../../../public/my-photo.webp'
import { ABOUT_ME } from '@/constants/contents'
import { MainContent } from '@/components/About/MainContent'

export default function AboutMe() {
  const aboutContainer = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const responsiveAnimation = gsap.matchMedia()
      responsiveAnimation.add('(min-width:768px)', () => {
        gsap.from('.section-header', {
          ease: 'power2.in',
          xPercent: -100,
          scrollTrigger: {
            trigger: '#trigger',
            start: 'top bottom-=10%',
            end: 'bottom top+=20%',
            scrub: 1,
          },
        })
        gsap.from('#photo', {
          yPercent: 50,
          duration: 1.5,
          opacity: 0,
          scrollTrigger: {
            trigger: '#photo-container',
            start: 'top bottom',
            end: () => `+=${photoRef.current!.offsetHeight}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })

        gsap.to('#personal-details p', {
          stagger: 0.3,
          yPercent: -15,
          opacity: 1,
          duration: 2,
          ease: 'back',
          scrollTrigger: {
            trigger: '#photo-container',
            start: 'bottom bottom+=10%',
            end: () => `+=${photoRef.current!.offsetHeight}`,
            scrub: 1,
            invalidateOnRefresh: true,
            toggleActions: 'play pause resume reset',
          },
        })
      })
      ScrollTrigger.refresh(true)
    }, aboutContainer)
    return () => ctx.revert()
  }, [])
  return (
    <section
      ref={aboutContainer}
      id="about-me"
      className="wrapper flex-col lg:flex-row lg:gap-[5vw] justify-center items-center px-[10vw] lg:px-[6vw] pt-[25vh] lg:pt-[15vh] pb-[10vh] lg:pb-[12vh] bg-secondaryBackground dark:bg-darkSecondaryBackground"
    >
      <div className="w-screen h-[20vh] absolute left-0 top-0" id="trigger" />
      <h1 className="section-header">about me</h1>

      <div
        id="photo-container"
        className="flex flex-col justify-center items-center gap-[2vh] mt-[3vh] xl:mt-[25vh]"
        ref={photoRef}
      >
        <Image
          src={myPhoto}
          id="photo"
          priority
          alt="My photo"
          className="h-[230px] w-fit sm:h-[300px] sm:w-[222.5px] lg:h-[400px] lg:w-auto shadow-primaryShadow"
        />
        <div
          id="personal-details"
          className="w-full flex flex-col text-textBodyMobile lg:text-textBody font-roboto "
        >
          {ABOUT_ME.personalInfos.map((info) => (
            <p key={info.label} className="flex items-center lg:opacity-0">
              <IconArrow className="text-tertiaryColor" />
              <strong className="pr-[0.5vw]">{info.label}</strong> {info.value}
            </p>
          ))}
        </div>
      </div>
      <MainContent />
    </section>
  )
}
