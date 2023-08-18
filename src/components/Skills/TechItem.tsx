import { StackLevel } from '@/constants/contents'
import { assertNever } from '@/utils/assertNever'

interface TechProps {
  tech: StackLevel
}

export enum Variant {
  A,
  B,
  C,
  D,
  E,
}

export function TechItem({ tech }: TechProps) {
  const styleBg = getStyle(tech.level)

  function getStyle(variant: Variant) {
    switch (variant) {
      case Variant.A:
        return {
          background: 'bg-90 text-white',
        }
      case Variant.B:
        return {
          background: 'bg-70 text-white',
        }
      case Variant.C:
        return {
          background: 'bg-50',
        }
      case Variant.D:
        return {
          background: 'bg-30',
        }
      case Variant.E:
        return {
          background: 'bg-10',
        }
      default:
        return assertNever(variant)
    }
  }

  return (
    <div className={`tech-item ${styleBg.background}`}>
      <tech.icon title={tech.name} /> {tech.name}
    </div>
  )
}
