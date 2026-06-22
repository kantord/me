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

const MONTHS: Record<string, string> = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
}

function toDatetime(date: string): string | undefined {
  const [year, month] = date.split(' ')
  const monthNum = MONTHS[month]
  return monthNum ? `${year}-${monthNum}` : undefined
}

function TimePeriod({ start, end }: { start: string; end: string }) {
  return (
    <span className="text-[0.8rem] font-normal absolute h-full inline-block left-[-4rem] w-16 text-right max-[850px]:!mt-8 max-[850px]:h-[3em] max-[850px]:bg-[#f9f9f9] max-[850px]:z-[1000] max-[500px]:-left-8 max-[500px]:mt-4">
      <time dateTime={toDatetime(start)} className="inline-block">{start}</time>
      <time dateTime={toDatetime(end)} className="inline-block">{end}</time>
    </span>
  )
}

export function TimelineEntry({ company, start, end, description, projects }: TimelineEntryData) {
  return (
    <li className="ml-[2.7rem] my-4 py-2 px-4 bg-[#e9f0f3] before:content-[''] before:ml-px before:absolute before:left-[0.35rem] before:bg-[#7c9fb0] before:border before:border-[#243b55] before:w-[0.7rem] before:h-[0.7rem] before:rounded-[0.7rem] before:box-border before:mt-2">
      <p className="m-0 text-[1rem] font-semibold">
        {company} <TimePeriod start={start} end={end} />
      </p>
      {description && <p className="m-0 text-[1rem]">{description}</p>}
      {projects && (
        <ol className="mt-[0.8em]">
          {projects.map((project) => (
            <li
              key={project.title}
              className="mb-4 text-[1rem] before:content-[''] before:ml-px before:absolute before:left-[0.525rem] before:bg-[#243b55] before:border before:border-[#243b55] before:w-[0.35rem] before:h-[0.35rem] before:rounded-[0.35rem] before:box-border before:mt-2"
            >
              <p className="m-0 text-[1rem] font-semibold">{project.title}</p>
              <p className="m-0 text-[1rem]">{project.description}</p>
            </li>
          ))}
        </ol>
      )}
    </li>
  )
}
