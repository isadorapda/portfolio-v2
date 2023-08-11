import {
  TiSocialLinkedin as IconLinkedIn,
  TiSocialTwitter as IconTwitter,
} from 'react-icons/ti'
import { IoLogoGithub as IconGithub } from 'react-icons/io'
import { IconType } from 'react-icons'

interface IconLinks {
  path: string
  icon: IconType
  title: string
}
export const SOCIALS_ICON_LINKS: Array<IconLinks> = [
  {
    path: 'https://github.com/isadorapda',
    icon: IconGithub,
    title: 'Github',
  },
  {
    path: 'https://twitter.com/isadorapdaa',
    icon: IconTwitter,
    title: 'Twitter',
  },
  {
    path: 'https://www.linkedin.com/in/isadorapda/',
    icon: IconLinkedIn,
    title: 'LinkedIn',
  },
]
