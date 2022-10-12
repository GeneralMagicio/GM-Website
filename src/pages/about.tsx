import Head from 'next/head'
import { ReactElement, useRef } from 'react'
import { AboutHero } from '../components/About/Hero'
import { AboutValues } from '../components/About/Values'
import { MeetConferences } from '../components/Meet'
import { OurMagicians } from '../components/OurMagicians'
import { AppLayout } from '../layouts/AppLayout'
import { NextPageWithLayout } from './_app'

const About: NextPageWithLayout = () => {
  const aboutRef = useRef<HTMLDivElement>(null)

  function handleScroll() {
    if (null !== aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <Head>
        <title>About | General Magic</title>
      </Head>
      <AboutHero handleScroll={handleScroll} />
      <div className="bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900">
        <AboutValues ref={aboutRef} />
        <OurMagicians page="About" />
      </div>
      <MeetConferences />
    </>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default About
