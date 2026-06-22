export interface ProjectCardData {
  href: string
  image: string
  title: string
  description: string
}

function ProjectCard({ href, image, title, description }: ProjectCardData) {
  return (
    <li>
      <a href={href}>
        <span className="img" style={{ backgroundImage: `url('${image}')` }} />
        <span>{title}</span>
        <span>{description}</span>
      </a>
    </li>
  )
}

export function CardRow({ projects }: { projects: ProjectCardData[] }) {
  return (
    <div className="cards">
      <ul>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </div>
  )
}
