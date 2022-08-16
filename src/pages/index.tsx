import Head from 'next/head'
import { HomeHero } from '../components/Home/Hero'
import { History } from '../components/Home/History'
import { HomeRedirect } from '../components/Home/Redirect'

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/AkiraExpanded.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <div className="divide-y divide-neutral-800">
        <HomeHero />
        <HomeRedirect />
        <History />
      </div>
    </>
  )
}
