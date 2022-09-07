import Head from 'next/head'
import { ProjectsHero } from '../components/Projects/Hero'
import { ProjectsList } from '../components/Projects/List'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | General Magic</title>
      </Head>
      <ProjectsHero />
      <ProjectsList />
    </>
  )
}
