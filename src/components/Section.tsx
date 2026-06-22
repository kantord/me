import type { ReactNode } from 'react'

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid grid-cols-[8rem_1fr] gap-x-16 max-[850px]:block">
      <h2 className="text-[1.618rem] mb-[1.618rem] leading-none text-[#e16552] sticky top-0 self-start font-heading text-right max-[850px]:text-left">
        {title}
      </h2>
      <div className="mb-[2.427rem]">
        {children}
      </div>
    </section>
  )
}
