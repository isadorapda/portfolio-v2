'use client'

import Link from 'next/link'
import { SOCIALS_ICON_LINKS } from '@/constants/socialMediaIcons'

interface MediaProps {
  isMenuOpen?: boolean
}
export function SocialMediaIcons({ isMenuOpen }: MediaProps) {
  return (
    <div
      className={`${
        isMenuOpen ? 'flex' : 'hidden'
      }   lg:flex lg:flex-col justify-center gap-[6vh] lg:-translate-y-1/2 fixed right-0 lg:right-[6vw] top-[70vh] lg:top-[50vh] w-[70vw] md:w-[40vw] lg:w-max`}
    >
      {SOCIALS_ICON_LINKS.map((icon) => (
        <Link
          key={icon.path}
          aria-label={`Go to my ${icon.title} page.`}
          href={icon.path}
          title={icon.title}
          target="_blank"
          className={`text-contrastPrimaryColor dark:text-darkContrastPrimaryColor hover:scale-125 hover:text-tertiaryColor transition-all duration-300`}
        >
          {<icon.icon className="w-4 h-4 lg:w-5 lg:h-5" />}
        </Link>
      ))}
    </div>
  )
}
