import Image from 'next/image'
import logo from '../../../public/logoWhite.svg'
import { ContactsFooter } from './ContactsFooter'

export function Footer() {
  return (
    <footer className="w-screen relative grid grid-cols-1 auto-rows-auto gap-[6vh] sm:grid-cols-[0.5fr_1.5fr_0.5fr] md:grid-cols-3 justify-center items-center bg-tertiaryColor lg:gap-[5vw] py-10 lg:py-[10vh] md:px-[6vw] text-primaryColor">
      <div className="max-S:flex max-S:items-center max-S:justify-center max-S:pb-[2vh]">
        <Image src={logo} alt="logo" />
      </div>
      <div className="h-full flex flex-col justify-end items-center text-xs font-exo gap-[4vh] max-S:order-3">
        <p>Designed and built by Isadora</p>
      </div>
      <ContactsFooter />
    </footer>
  )
}
