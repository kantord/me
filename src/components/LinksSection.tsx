export interface ExternalLink {
  href: string
  label: string
}

export function LinksSection({ links }: { links: ExternalLink[] }) {
  return (
    <>
      <h2>Links</h2>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
