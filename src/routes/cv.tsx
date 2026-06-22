import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import cvHtml from '../../cv/_tmp.html?raw'
import '../../cv/cv.css'

export const Route = createFileRoute('/cv')({
  component: CvPage,
})

function CvPage() {
  return <div dangerouslySetInnerHTML={{ __html: cvHtml }} />
}
