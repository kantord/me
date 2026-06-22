import { Section } from './Section'
import { Timeline } from './Timeline'
import type { TimelineEntryData } from './TimelineEntry'

export function EmploymentSection({ entries }: { entries: TimelineEntryData[] }) {
  return (
    <Section title="Employment history">
      <Timeline entries={entries} />
    </Section>
  )
}
