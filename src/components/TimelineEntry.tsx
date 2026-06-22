export interface TimelineProject {
  title: string
  description: string
}

export interface TimelineEntryData {
  company: string
  start: string
  end: string
  description?: string
  projects?: TimelineProject[]
}

function TimePeriod({ start, end }: { start: string; end: string }) {
  return (
    <span className="time">
      <span>{start}</span>
      <span className="end">{end}</span>
    </span>
  )
}

export function TimelineEntry({ company, start, end, description, projects }: TimelineEntryData) {
  return (
    <li>
      <p>
        {company} <TimePeriod start={start} end={end} />
      </p>
      {description && <p>{description}</p>}
      {projects && (
        <ul>
          {projects.map((project) => (
            <li key={project.title}>
              <p>{project.title}</p>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
