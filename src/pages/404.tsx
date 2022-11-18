import { ReactElement } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { LayoutHero } from '@/components/base/LayoutHero'
import { NextPageWithLayout } from '@/pages/_app'
import { AppLayout } from '@/layouts/AppLayout'
import Cloud from 'public/images/assets/404Clouds.png'
import plantL from 'public/images/assets/homePlantL.svg'
import fire from 'public/images/assets/404fire.png'
import wind from 'public/images/assets/404Wind.png'

const error404: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Page not found | General Magic</title>
      </Head>
      <LayoutHero>
        <div className="flex h-full items-center justify-center px-10 py-8 sm:px-16 md:px-24 lg:px-32">
          <div className="absolute inset-0 bg-neutral-900 bg-about bg-cover bg-center bg-no-repeat mix-blend-multiply" />
          <div className="z-40 flex flex-col items-center justify-center">
            <Title>
              <span>404</span>
            </Title>
            <div className=" lg:mb-8">
              <Subtitle paddingBottom={false} paddingTop={false}>
                <span className="max-w-[700px] text-center">
                  Sorry, page not found
                </span>
              </Subtitle>
            </div>
          </div>
          <div className="absolute left-0 top-28 md:left-10">
            <Image src={Cloud} alt=""></Image>
          </div>
          <div className="absolute left-0 bottom-0 flex">
            <Image src={plantL} alt="plant" />
          </div>
          <div className="absolute right-0 bottom-0 hidden md:flex">
            <Image src={wind} alt="wind" />
          </div>
          <div className="absolute right-0 bottom-0 hidden md:flex md:w-full md:justify-center">
            <Image src={fire} alt="wind" />
          </div>
        </div>
      </LayoutHero>
    </>
  )
}

error404.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>
}

export default error404
