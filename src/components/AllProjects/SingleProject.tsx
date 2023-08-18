'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Project } from '@/constants/contents'
import { Actions } from '../Projects/Actions'

interface ProjectProps {
  project: Project
}
export function SingleProject({ project }: ProjectProps) {
  const [displayIndex, setDisplayIndex] = useState<number>(0)
  const currentImage = project.images?.length
    ? project.images[displayIndex]
    : project.image

  return (
    <article
      key={project.id}
      className="flex flex-col w-full items-center  gap-[5vw] project"
    >
      <div className="flex relative">
        <Image
          src={currentImage}
          alt={project.title}
          className="h-[40vh] w-auto rounded-md shadow-primaryShadow"
        />

        <div className="flex gap-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-5">
          {project.images?.map((_, index) => (
            <span
              key={index}
              onClick={() => setDisplayIndex(index)}
              className={`rounded-full h-2 w-2  cursor-pointer transition-colors ease-in-out duration-200 ${
                index === displayIndex ? 'bg-tertiaryColor' : 'bg-[#57a74374]'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        <div className="flex  gap-4 items-center">
          <h2 className="font-semibold font-exo text-2xl">{project.title}</h2>
          <Actions project={project} />
        </div>
        <p className="">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <div
              key={tech.name}
              className="rounded-full py-1 px-3 flex flex-wrap gap-2 items-center justify-center bg-[#57a74374] text-[12px]"
            >
              <tech.icon title={project.title} /> {tech.name}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
