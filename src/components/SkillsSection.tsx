import { Section } from './Section'
import { SkillList, type Skill } from './SkillList'

export function SkillsSection({ skills }: { skills: Skill[] }) {
  return (
    <Section title="Skills">
      <SkillList skills={skills} />
    </Section>
  )
}
