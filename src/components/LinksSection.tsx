import { Section } from './Section'

export interface ExternalLink {
  href: string
  label: string
}

export function LinksSection({ links }: { links: ExternalLink[] }) {
  return (
    <Section title="Links">
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
