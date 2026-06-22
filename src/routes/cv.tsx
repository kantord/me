import { createFileRoute } from '@tanstack/react-router'
import '../../cv/cv.css'
import librelingoImg from '../../cv/librelingo.png'
import justDashboardImg from '../../cv/just_dashboard.png'
import emutoImg from '../../cv/emuto.png'
import seagoatImg from '../../cv/seagoat.png'
import { CvHeader } from '../components/CvHeader'
import { ContactInfo } from '../components/ContactInfo'
import { SkillsSection } from '../components/SkillsSection'
import { EmploymentSection } from '../components/EmploymentSection'
import { LinksSection, type ExternalLink } from '../components/LinksSection'
import { PublicationsSection, type Publication } from '../components/PublicationsSection'
import { PetProjectsSection } from '../components/PetProjectsSection'
import { PrimarySections } from '../components/PrimarySections'
import type { Skill } from '../components/SkillList'
import type { TimelineEntryData } from '../components/TimelineEntry'
import type { ProjectCardData } from '../components/ProjectCard'

export const Route = createFileRoute('/cv')({
  component: CvPage,
})

const skills: Skill[] = [
  { name: 'React', level: 'strong' },
  { name: 'Python', level: 'strong' },
  { name: 'Next.js', level: 'strong' },
  { name: 'NodeJS', level: 'plain' },
  { name: 'TypeScript', level: 'strong' },
  { name: 'JavaScript', level: 'strong' },
  { name: 'Svelte', level: 'em' },
  { name: 'Electron', level: 'span' },
  { name: 'PostgreSQL', level: 'em' },
  { name: 'CSS', level: 'strong' },
  { name: 'GraphQL', level: 'em' },
  { name: 'React Query', level: 'em' },
  { name: 'OpenApi', level: 'plain' },
  { name: 'Webpack', level: 'plain' },
  { name: 'Django', level: 'em' },
  { name: 'Web Scraping', level: 'em' },
  { name: 'd3', level: 'em' },
  { name: 'PostgreSQL', level: 'em' },
  { name: 'Linux', level: 'plain' },
  { name: 'Docker', level: 'plain' },
  { name: 'Git', level: 'em' },
  { name: 'PrinceXML', level: 'em' },
  { name: 'Vim', level: 'em' },
]

const employment: TimelineEntryData[] = [
  {
    company: 'OLX Autos (Remote, Spain)',
    start: 'Present',
    end: '2022 Jul',
    projects: [
      {
        title: 'Internal Content Management System',
        description:
          'Building a web based interface that connects internal CMSs and databases to allow international teams to manage marketing projects autonomously. Mainly React, Next.js, MUI, Node. Test automation using Cypress.',
      },
    ],
  },
  {
    company: 'Kumux (Remote, Spain)',
    start: '2022 Jul',
    end: '2021 Nov',
    description:
      'Tech lead; managing the product team. Tech stack: Python (Fastapi), Google Cloud, TypeScript, Node.js, Next.js, Gatsby',
  },
  {
    company: 'Kiwi.com (Barcelona/Remote, Spain)',
    start: '2021 Nov',
    end: '2018 Mar',
    projects: [
      {
        title: 'Manage My Booking',
        description:
          'Frontend using TypeScript, Next.js, React, React Query; backend-for-frontend layer using Python + Flask. Test automation using Cypress. Implementing an internal project template for other teams.',
      },
      {
        title: 'SmartFAQ',
        description:
          'Frontend development using Flow, React and Relay; development of a GraphQL (proxy) server',
      },
    ],
  },
  {
    company: 'Mito (Budapest, Hungary)',
    start: '2018 Mar',
    end: '2016 Sep',
    description:
      'Data visualizaton and ETL using Python, Chartio and d3.js. Admin systems using Django.',
  },
  {
    company: 'Maven 7 (Budapest, Hungary)',
    start: '2016 Sep',
    end: '2013 Mar',
    projects: [
      {
        title: 'OrgMapper',
        description:
          'Frontend and backend work using Django and Angular. Implementing new branding and design. Generating print quality PDF reports with dynamic contents.',
      },
      {
        title: 'Diktiolabs',
        description:
          'Data collection and data analysis using Python and Selenium; web development; data visualization using d3.js. Development of landing pages.',
      },
      {
        title: 'FirmNetOnline',
        description: 'Frontend and backend work using Django and jQuery',
      },
    ],
  },
]

const links: ExternalLink[] = [
  { href: 'https://github.com/kantord', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/dániel-kántor-b8975a39/', label: 'LinkedIn' },
]

const publications: Publication[] = [
  {
    href: 'https://iopscience.iop.org/article/10.1088/1755-1315/1099/1/012025/pdf',
    title: 'The circadian impact of computer monitors with different color configurations',
    citation: 'A Huguet-Ferran et al 2022 IOP Conf. Ser.: Earth Environ. Sci. 1099 012025',
  },
]

const projectRows: ProjectCardData[][] = [
  [
    {
      href: 'https://github.com/LibreLingo',
      image: librelingoImg,
      title: 'LibreLingo',
      description: 'community-owned language-learning platform',
    },
    {
      href: 'https://kantord.github.io/just-dashboard/',
      image: justDashboardImg,
      title: 'just-dashboard',
      description: 'create dashboards in minutes using YAML files',
    },
  ],
  [
    {
      href: 'https://kantord.github.io/emuto/',
      image: emutoImg,
      title: 'emuto',
      description: 'an experimental programming language for transforming JSON files',
    },
    {
      href: 'https://github.com/kantord/SeaGOAT',
      image: seagoatImg,
      title: 'SeaGOAT',
      description: 'AI-based local code search (grep-like)',
    },
  ],
]

function CvPage() {
  return (
    <main>
      <CvHeader />
      <PrimarySections>
        <ContactInfo />
        <SkillsSection skills={skills} />
        <EmploymentSection entries={employment} />
        <LinksSection links={links} />
      </PrimarySections>
      <PublicationsSection publications={publications} />
      <PetProjectsSection rows={projectRows} />
    </main>
  )
}
