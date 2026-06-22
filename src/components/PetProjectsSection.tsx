import { Section } from './Section'
import { CardRow, type ProjectCardData } from './ProjectCard'

export function PetProjectsSection({ rows }: { rows: ProjectCardData[][] }) {
  return (
    <Section title="Pet projects">
      <p> </p>
      {rows.map((row) => (
        <CardRow key={row[0].title} projects={row} />
      ))}
    </Section>
  )
}
