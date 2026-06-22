import { TimelineEntry, type TimelineEntryData } from './TimelineEntry'

export function Timeline({ entries }: { entries: TimelineEntryData[] }) {
  return (
    <div className="relative [print-color-adjust:exact] before:content-[''] before:block before:absolute before:bg-[silver] before:w-[2px] before:left-[0.7rem] before:top-0 before:bottom-0">
      <ol>
        {entries.map((entry) => (
          <TimelineEntry key={entry.company} {...entry} />
        ))}
      </ol>
    </div>
  )
}
