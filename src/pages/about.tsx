import Head from 'next/head'
import { useRef } from 'react'
import { AboutHero } from '../components/About/Hero'
import { AboutValues } from '../components/About/Values'
import { OurMagicians } from '../components/OurMagicians'

export default function About() {
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
      <div
        ref={aboutRef}
        className="bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900"
      >
        <AboutValues />
        <OurMagicians page="About" />
      </div>
    </>
  )
}
