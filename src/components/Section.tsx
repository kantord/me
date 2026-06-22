import type { ReactNode } from 'react'

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      {/* TODO: h2 float-left layout and h2~* sibling padding-left are still in cv.css.
          Final goal: replace with CSS grid (h2 in one column, content in another). */}
      <h2 className="text-[1.618rem] mb-[1.618rem] leading-none text-[#e16552] sticky top-0 font-heading">{title}</h2>
      {children}
    </div>
  )
}
