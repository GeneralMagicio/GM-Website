import Head from 'next/head'
import { useRef } from 'react'
import { ProjectsHero } from '../components/Projects/Hero'
import { ProjectsList } from '../components/Projects/List'

export default function Projects() {
  const projectRef = useRef<HTMLDivElement>(null)

  function handleScroll() {
    if (null !== projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <Head>
        <title>Projects | General Magic</title>
      </Head>
      <ProjectsHero handleScroll={handleScroll} />
      <div ref={projectRef}>
        <ProjectsList />
      </div>
    </>
  )
}
