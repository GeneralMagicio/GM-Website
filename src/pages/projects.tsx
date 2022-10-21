import { ReactElement, useRef } from 'react'
import Head from 'next/head'
import { ProjectsHero } from '@/components/Projects/Hero'
import { ProjectsList } from '@/components/Projects/List'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/pages/_app'

const Projects: NextPageWithLayout = () => {
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
      <ProjectsList ref={projectRef} />
    </>
  )
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Projects
