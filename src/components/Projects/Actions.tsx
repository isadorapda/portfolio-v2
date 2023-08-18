'use client'

import Link from 'next/link'
import { Project } from '@/constants/contents'
import { IoLogoGithub as IconGithub } from 'react-icons/io'
import { RiExternalLinkLine as IconURLLink } from 'react-icons/ri'

interface ActionProps {
  project: Project
}

export function Actions({ project }: ActionProps) {
  return (
    <div className="flex gap-5">
      <button type="button" className="project-link-button">
        <Link href={project.linkGithub} target="_blank">
          <IconGithub />
        </Link>
      </button>
      {project.url && (
        <button type="button" className="project-link-button">
          <Link href={project.url} target="_blank">
            <IconURLLink />
          </Link>
        </button>
      )}
    </div>
  )
}
