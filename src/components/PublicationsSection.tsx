import { Section } from './Section'

export interface Publication {
  href: string
  title: string
  citation: string
}

export function PublicationsSection({ publications }: { publications: Publication[] }) {
  return (
    <Section title="Publications">
      <ul>
        {publications.map(({ href, title, citation }) => (
          <li key={href}>
            Co-authored <a href={href}>{title}</a> {citation}
          </li>
        ))}
      </ul>
    </Section>
  )
}
