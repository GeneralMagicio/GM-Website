import Image from 'next/image'
import { Title } from '../components/base/Title'
import { Subtitle } from '../components/base/Subtitle'
import Head from 'next/head'
import Cloud from '../../public/images/404Clouds.png'
import plantL from '../../public/images/homePlantL.svg'
import fire from '../../public/images/404fire.png'
import wind from '../../public/images/404Wind.png'

export default function error404() {
  return (
    <>
      <Head>
        <title>Page not found | General Magic</title>
      </Head>
      <div className="relative h-[calc(100vh_-_108px)] min-h-[552px] py-8">
        <div className="flex justify-center h-full items-center px-10 sm:px-16 md:px-24 lg:px-32">
          <div className="absolute inset-0 bg-about bg-cover bg-center bg-no-repeat bg-neutral-900 mix-blend-multiply" />
          <div className="z-40 flex flex-col justify-center items-center">
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
        </div>
        <div className="absolute left-0 md:left-10 top-28">
          <Image src={Cloud} alt=""></Image>
        </div>
        <div className="absolute left-0 bottom-0 flex">
          <Image src={plantL} alt="plant" />
        </div>
        <div className="hidden absolute right-0 bottom-0 md:flex">
          <Image src={wind} alt="wind" />
        </div>
        <div className="hidden absolute right-0 bottom-0 md:flex md:w-full md:justify-center">
          <Image src={fire} alt="wind" />
        </div>
      </div>
    </>
  )
}
