'use client'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SocialMediaIcons } from './SocialMediaIcons'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { HamburgerMenu } from './HamburgerMenu'
import { NavigationLinks } from './NavigationLinks'
import logo from '../../../public/logo.svg'
import Image from 'next/image'

export function NavBar() {
  const width = useWindowWidth()
  const isDesktop = width >= 1024
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navBarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const responsiveAnimation = gsap.matchMedia()
    responsiveAnimation.add('(min-width:1024px)', () => {
      const showAnim = gsap
        .from('#main-navbar', {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1)

      ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse()
        },
      })
    })
  }, [])
  return (
    <nav
      ref={navBarRef}
      id="main-navbar"
      className="fixed top-0 flex justify-between items-center bg-transparent z-[1000] transition-all ease-in-out duration-[0.4s] min-h-[12vh] w-screen py-[5vh] px-[8vw] md:px-[6vw]"
    >
      <Image src={logo} alt="Logo" />
      {isDesktop ? (
        <div className="page-links">
          <NavigationLinks setIsMenuOpen={setIsMenuOpen} />
        </div>
      ) : (
        <>
          <div
            onClick={() => setIsMenuOpen(false)}
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } h-screen w-screen fixed top-0 left-0 bg-[rgba(164,_164,_164,_0.782)]  backdrop-opacity-50`}
          />
          <div
            className={`page-links flex-col fixed right-0 top-0 bg-primaryColor dark:bg-darkPrimaryColor h-screen w-[70%] md:w-[40%] py-[15vh] px-[5vw] shadow-[-1px_4px_21px_rgba(0,0,0,0.15)] ${
              isMenuOpen ? 'justify-start items-end gap-[5vh]' : 'hidden'
            }`}
          >
            <NavigationLinks setIsMenuOpen={setIsMenuOpen} />
          </div>
          <button
            aria-label={`${
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }`}
            type="button"
            className="h-5 flex items-center justify-end z-[5000]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HamburgerMenu isMenuOpen={isMenuOpen} />
          </button>
        </>
      )}
      <div
        className={`${
          isDesktop ? '' : 'absolute top-[12vh] right-0 pr-[8vw] sm:pr-[6vw]'
        }  ${
          isMenuOpen ? 'hidden' : 'flex'
        }  h-auto xl:flex xl:justify-center xl:items-center xl:h-full cursor-pointer`}
      >
        <ThemeSwitcher />
      </div>
      <SocialMediaIcons isMenuOpen={isMenuOpen} />
    </nav>
  )
}
