import Image from 'next/image'
import plantL from '../../../public/images/homePlantL.svg'
import plantR from '../../../public/images/homePlantR.svg'
import down from '../../../public/images/down.svg'
import aguila from '../../../public/images/aguila.png'
import Head from 'next/head'

export function HomeHero() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/Akira.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
      </Head>
      <div className="relative h-[calc(100vh_-_108px)]">
        <div className="flex justify-between h-full">
          <div className="absolute inset-0 bg-home bg-cover bg-center bg-no-repeat bg-neutral-900 bg-blend-multiply" />
          <div className="hidden md:block absolute 2xl:right-96 xl:right-64 lg:right-56 right-20 top-20">
            <Image src={aguila} alt="making magic happen" />
          </div>
          <div className="self-end flex items-end">
            <Image src={plantL} alt="plant" />
          </div>
          <div className="self-center z-40">
            <h1 className="uppercase text-white font-akira flex flex-col 2xl:text-8xl xl:text-7xl text-6xl 2xl:leading-[96px]">
              <span>Solution</span>
              <span>services</span>
              <span>for Impact</span>
              <span>DAO&apos;S</span>
            </h1>
            <p className=" text-white flex flex-col text-2xl leading-8 pt-3 pb-8">
              <span>We are a group of Web3 professionals with deep roots/</span>
              <span>embedded in the Ethereum ecosystem devoted to</span>
              <span>
                supporting commons-based organizations and public good
              </span>
              <span>projects.</span>
            </p>
            <button className="hover:opacity-70">
              <Image src={down} alt="Down" />
            </button>
          </div>
          <div className="self-end flex items-end justify-end">
            <Image src={plantR} alt="plant" height={641} width={240} />
          </div>
        </div>
      </div>
    </>
  )
}
