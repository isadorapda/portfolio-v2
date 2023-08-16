'use client'

import Image from 'next/image'
import { Project } from '@/constants/contents'
import { Actions } from './Actions'

interface ProjectProps {
  project: Project
}

export function SingleProject({ project }: ProjectProps) {
  return (
    <article
      key={project.id}
      className="flex flex-col xl:flex-row w-full items-center justify-center gap-[7vh] lg:gap-[5vw] project"
    >
      <div className="xl:w-1/2">
        <Image
          src={project.image}
          alt={project.title}
          className="h-auto w-full rounded-md shadow-primaryShadow"
        />
      </div>
      <div className="flex flex-col gap-6 w-full xl:w-1/2">
        <div className="flex gap-4 items-center">
          <h2 className="font-semibold font-exo text-textHeaderSmall md:text-2xl">
            {project.title}
          </h2>
          <Actions project={project} />
        </div>
        <p className="text-textBodyMobile md:text-textBody">
          {project.description}
        </p>
        <p className="text-textBodyMobile md:text-textBody">
          <strong>Skills:</strong> {project.skills}
        </p>

        <div className="flex flex-wrap justify-between md:justify-normal md:gap-7">
          {project.stack.map((tech) => (
            <div key={tech.name}>
              <tech.icon title={project.title} />
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
