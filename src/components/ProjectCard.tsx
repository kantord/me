export interface ProjectCardData {
  href: string
  image: string
  title: string
  description: string
}

function ProjectCard({ href, image, title, description }: ProjectCardData) {
  return (
    <li className="basis-full ml-[1em]">
      <a
        href={href}
        className="text-[0.9rem] h-40 p-2 overflow-hidden flex bg-[#e9f0f3] flex-col no-underline text-inherit"
      >
        <span
          className="self-center block w-36 h-16 bg-cover bg-center mb-4 bg-white"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <span className="flex text-[0.9rem] font-semibold">{title}</span>
        <span className="flex text-[0.65rem]">{description}</span>
      </a>
    </li>
  )
}

export function CardRow({ projects }: { projects: ProjectCardData[] }) {
  return (
    <div className="mt-4 ml-2">
      <ul className="flex">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </ul>
    </div>
  )
}
