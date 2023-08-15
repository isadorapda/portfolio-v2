import { Stack } from '@/constants/contents'

interface TechProps {
  tech: Stack
}

export function TechItem({ tech }: TechProps) {
  return (
    <div className={`tech-item bg-[#57A743]/50`}>
      <tech.icon title={tech.name} /> {tech.name}
    </div>
  )
}
