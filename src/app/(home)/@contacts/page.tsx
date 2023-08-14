'use client'

import Link from "next/link"
import { GoMail as IconEmail } from 'react-icons/go'
import { BsPhone as IconMobile } from 'react-icons/bs'
import { TiSocialLinkedin as IconLinkedIn } from 'react-icons/ti'
import { ABOUT_ME } from "@/constants/contents"

export default function Contacts() {
  return (
    <section id="contacts" className="wrapper flex-col justify-center items-center p-mobile sm:pt-[20vh] sm:px-[10vw] sm:pb-[10vh] gap-[5vw] bg-primaryBackground dark:bg-darkPrimaryBackground">
      <h1 className="section-header left-[5vw]">get in touch</h1>
      <div className="w-full  flex flex-col sm:grid sm:grid-cols-[1.5fr_1fr] sm:gap-[7vw] py-[3vh] sm:py-[10vh] lg:pt-[25vh] lg:pb-[10vh] text-textBodyMobile sm:text-textBody leading-bodyMobile sm:leading-body text-contrastPrimaryColor dark:text-darkContrastPrimaryColor">
        <div>
          <h4>Have any questions or want to work together?</h4>
          <p>I am currently open for permanent jobs and freelancing projects.</p>
          <p></p>
        </div>
        <div className="flex flex-col gap-5">

        <div className="contact-info">
            <IconEmail className='icon-contact'/>
            <Link href={`mailto:${ABOUT_ME.contacts.emailAddress}`}>{ABOUT_ME.contacts.emailAddress}</Link>
        </div>
        <div className="contact-info">
            <IconMobile className='icon-contact'/>
            <Link href={`tel:${ABOUT_ME.contacts.mobile}`}>{ABOUT_ME.contacts.mobile}</Link>
        </div>
        <div className="contact-info">
            <IconLinkedIn className='icon-contact'/>
            <Link href={ABOUT_ME.contacts.linkedIn}>isadorapda</Link>
        </div>
        </div>

      </div>
    </section>
  )
}
