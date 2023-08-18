import Link from 'next/link'
import { ABOUT_ME } from '@/constants/contents'
import { SOCIALS_ICON_LINKS } from '@/constants/socialMediaIcons'

export function ContactsFooter() {
  return (
    <div className=" max-S:order-2 max-S:items-center max-S:gap-[6vh] flex flex-col items-end gap-[4vh]">
      <div className="flex flex-col gap-3 md:items-end">
        <div className="contact-info text-sm">
          <Link href={`mailto:${ABOUT_ME.contacts.emailAddress}`}>
            {ABOUT_ME.contacts.emailAddress}
          </Link>
        </div>
        <div className="contact-info text-sm">
          <Link href={`tel:${ABOUT_ME.contacts.mobile}`}>
            {ABOUT_ME.contacts.mobile}
          </Link>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        {SOCIALS_ICON_LINKS.map((icon) => (
          <Link
            aria-label={`Go to my ${icon.title} page.`}
            key={icon.path}
            href={icon.path}
            target="_blank"
            title={icon.title}
          >
            {' '}
            <icon.icon />
          </Link>
        ))}
      </div>
    </div>
  )
}
