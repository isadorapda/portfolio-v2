import { ABOUT_ME } from '@/constants/contents'

export function MainContent() {
  return (
    <div className="w-full lg:w-[50vw] text-textBodyMobile leading-bodyMobile font-roboto lg:pl-[3vw] lg:pt-[20vh] lg:pb-[5vh] text-contrastPrimaryColor dark:text-darkContrastPrimaryColor flex flex-col gap-[3vh]">
      <h3 className="mt-[8vh] sm:mt-[5vh] text-textBodyMobile">
        Hi there! My name is Isadora, I am a software developer based in London.
      </h3>
      <section className="flex flex-col">
        <h1 className="paragraph-heading">{ABOUT_ME.firstParagraph.heading}</h1>
        <p className="mb-3">{ABOUT_ME.firstParagraph.paragraphContent}</p>
      </section>
      <section className="flex flex-col">
        <h1 className="paragraph-heading">
          {ABOUT_ME.secondParagraph.heading}{' '}
        </h1>
        <p className="mb-3">{ABOUT_ME.secondParagraph.paragraphContent}</p>
      </section>
    </div>
  )
}
