'use client'
import Link from 'next/link'

import { OTHER_PROJECTS } from '@/constants/contents'
import { BsArrowLeft as IconArrowLeft } from 'react-icons/bs'
import { SingleProject } from '@/components/AllProjects/SingleProject'

export default function AllProjects() {
  return (
    <section
      className="wrapper flex-col bg-secondaryBackground dark:bg-darkPrimaryBackground p-mobile sm:py-[20vh] "
      //   id="projects"
    >
      <div
        className="w-screen h-[20vh] absolute left-0 top-0"
        // id="trigger-projects"
      />
      <div className="flex flex-col gap-5">
        <Link href={'/'} className="flex items-center gap-3">
          <IconArrowLeft /> Return to main
        </Link>
        <h1 className="font-exo text-[5vw] ">All Projects</h1>
      </div>
      <div
        id="stagger"
        className="w-full px-[3vw] flex flex-col lg:grid grid-cols-[repeat(auto-fit,_minmax(20vw,1fr))] gap-[20vh] pt-[20vh] pb-[10vh]"
      >
        {OTHER_PROJECTS.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
