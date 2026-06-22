type SkillLevel = 'strong' | 'em' | 'span' | 'plain'

export interface Skill {
  name: string
  level: SkillLevel
}

const itemClass = 'inline-block mx-[0.2rem] mb-2 leading-[1.2] py-[0.15rem] px-[0.3rem] bg-[#e9f0f3] rounded-[0.2rem]'

function SkillItem({ name, level }: Skill) {
  if (level === 'strong') return <li className={itemClass}><strong>{name}</strong></li>
  if (level === 'em') return <li className={itemClass}><em className="text-[0.9rem]">{name}</em></li>
  if (level === 'span') return <li className={itemClass}><span className="text-[0.8rem]">{name}</span></li>
  return <li className={itemClass}>{name}</li>
}

export function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <div className="[print-color-adjust:exact]">
      <ul className="text-justify -mx-[0.2rem]">
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </ul>
    </div>
  )
}
