import Head from 'next/head'
import { HomeHero } from '../components/Home/Hero'
import { History } from '../components/Home/History'
import { HomeRedirect } from '../components/Home/Redirect'

export default function Home() {
  return (
    <>
      <Head>
        <title>General Magic</title>
      </Head>
      <div className="divide-y divide-neutral-800">
        <HomeHero />
        <HomeRedirect />
        <History />
      </div>
    </>
  )
}
