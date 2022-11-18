import Image from 'next/image'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { ShopButton } from '@/components/base/ShopButton'
import { LayoutHero } from '@/components/base/LayoutHero'
import { LatestWork } from '@/components/Shop/LatestWork'
import shopHero from 'public/images/shopHero.png'

export function ShopHero() {
  return (
    <>
      <LayoutHero>
        <div className="flex h-full justify-between">
          <div className="absolute inset-0 bg-neutral-900 bg-shop bg-auto bg-center bg-no-repeat" />
          <div className="z-40 mx-6 self-center md:mx-0 md:mt-0 md:ml-28">
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
      </LayoutHero>
    </>
  )
}
