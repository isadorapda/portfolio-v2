'use client'

import Link from 'next/link'
import { GoMail as IconEmail } from 'react-icons/go'
import { BsPhone as IconMobile } from 'react-icons/bs'
import { TiSocialLinkedin as IconLinkedIn } from 'react-icons/ti'
import { ABOUT_ME } from '@/constants/contents'

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="wrapper flex-col justify-center items-center p-mobile pb-[10vh] bg-primaryBackground dark:bg-darkPrimaryBackground"
    >
      <h1 className="section-header left-[10vw] translate-x-0">get in touch</h1>
      <div className="w-full flex flex-col sm:grid sm:grid-cols-[1.5fr_1fr] gap-10 sm:gap-[7vw] md:pt-24 xl:pt-36 text-textBodyMobile sm:text-textBody leading-bodyMobile sm:leading-body">
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold">
            Have any questions, a project idea, or just want to chat tech? Feel
            free to reach out!
          </h4>
          <p>I am excited to connect and explore potential opportunities.</p>

          <p>
            Weather you are seeking a dedicated team member on a permanent basis
            or seeking freelance expertise, I am here to contribute and create.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="contact-info">
            <IconEmail className="icon-contact" />
            <Link href={`mailto:${ABOUT_ME.contacts.emailAddress}`}>
              {ABOUT_ME.contacts.emailAddress}
            </Link>
          </div>
          <div className="contact-info">
            <IconMobile className="icon-contact" />
            <Link href={`tel:${ABOUT_ME.contacts.mobile}`}>
              {ABOUT_ME.contacts.mobile}
            </Link>
          </div>
          <div className="contact-info">
            <IconLinkedIn className="icon-contact" />
            <Link href={ABOUT_ME.contacts.linkedIn}>isadorapda</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
