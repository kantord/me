type SkillLevel = 'strong' | 'em' | 'span' | 'plain'

export interface Skill {
  name: string
  level: SkillLevel
}

function SkillItem({ name, level }: Skill) {
  if (level === 'strong') return <li><strong>{name}</strong></li>
  if (level === 'em') return <li><em>{name}</em></li>
  if (level === 'span') return <li><span>{name}</span></li>
  return <li>{name}</li>
}

export function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <div className="compact">
      <ul>
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </ul>
    </div>
  )
}
