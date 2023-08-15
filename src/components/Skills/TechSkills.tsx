import { TechStackSkill } from '@/constants/contents'
import { TechItem } from './TechItem'

interface TechSkillsProps {
  skillArea: TechStackSkill
}

export function TechSkills({ skillArea }: TechSkillsProps) {
  return (
    <div className="flex flex-col  py-2 gap-3 ">
      <h3 className="text-textHeaderSmall font-semibold font-exo">
        {skillArea.header}
      </h3>
      <div className="flex flex-wrap items-center gap-3 ">
        {skillArea.tech.map((tech, index) => (
          <TechItem key={`${tech}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  )
}
