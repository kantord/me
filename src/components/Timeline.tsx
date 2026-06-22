import { TimelineEntry, type TimelineEntryData } from './TimelineEntry'

export function Timeline({ entries }: { entries: TimelineEntryData[] }) {
  return (
    <div className="timeline">
      <ul>
        {entries.map((entry) => (
          <TimelineEntry key={entry.company} {...entry} />
        ))}
      </ul>
    </div>
  )
}
