import { ReactElement, useRef } from 'react'
import Head from 'next/head'
import { MeetConferences } from '@/components/Meet'
import { HomeBg } from '@/components/Home/Background'
import { HomeHero } from '@/components/Home/Hero'
import { History } from '@/components/Home/History'
import { HomeRedirect } from '@/components/Home/Redirect'
import { NextPageWithLayout } from '@/pages/_app'
import { AppLayout } from '@/layouts/AppLayout'

const Home: NextPageWithLayout = () => {
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
        <HomeRedirect ref={redirectRef} />
        <History />
        <HomeBg />
        <MeetConferences />
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default Home
