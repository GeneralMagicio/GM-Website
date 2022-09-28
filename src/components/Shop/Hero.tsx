import { Title } from '../base/Title'
import { Subtitle } from '../base/Subtitle'
import Image from 'next/image'
import { ShopButton } from '../base/ShopButton'
import shopHero from '../../../public/images/shopHero.png'
import { LatestWork } from './LatestWork'

export function ShopHero() {
  return (
    <>
      <div className="relative h-[calc(100vh_-_108px)] min-h-[552px]">
        <div className="flex justify-between h-full">
          <div className="absolute inset-0 bg-shop bg-auto bg-center bg-no-repeat bg-neutral-900" />
          <div className="z-40 self-center md:mt-0 mx-6 md:mx-0 md:ml-28">
            <Title>
              <span className="max-w-3xl leading-[66.3px]">
                get your Web3 native swag shop
              </span>
            </Title>
            <Subtitle paddingBottom={true} paddingTop={true}>
              <span className="max-w-[700px]">
                Open-sourced and built specifically to serve web3 communities.
              </span>
            </Subtitle>
            <ShopButton bgColor="purple" text="get quote" url="/contact" />
          </div>
          {/* <div className="absolute top-3 inset-x-0 md:left-28 z-40">
            <LatestWork />
          </div> */}
          <div className="absolute right-0 bottom-0 flex mix-blend-overlay lg:mix-blend-normal">
            <Image src={shopHero} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
