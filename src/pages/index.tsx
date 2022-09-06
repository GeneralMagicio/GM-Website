import Head from 'next/head'
import { useRef } from 'react'
import { HomeBg } from '../components/Home/Background'
import { HomeHero } from '../components/Home/Hero'
import { History } from '../components/Home/History'
import { HomeMeet } from '../components/Home/Meet'
import { HomeRedirect } from '../components/Home/Redirect'

export default function Home() {
  const redirectRef = useRef<HTMLDivElement>(null)

  function handleScroll() {
    if (null !== redirectRef.current) {
      redirectRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <>
      <Head>
        <title>General Magic</title>
      </Head>
      <div className="divide-y divide-neutral-800">
        <HomeHero handleScroll={handleScroll} />
        <div ref={redirectRef}>
          <HomeRedirect />
        </div>
        <History />
        <HomeBg />
        <HomeMeet />
      </div>
    </>
  )
}
