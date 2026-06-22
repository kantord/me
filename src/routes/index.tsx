import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="p-4">
      <Link to="/cv">CV</Link>
    </div>
  )
}
