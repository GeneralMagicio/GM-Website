import Image from 'next/image'
import { ShopButton } from '@/components/base/ShopButton'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'
import shopHats from 'public/images/assets/shopHats.png'
import shopTshirts from 'public/images/assets/shopTshirts.png'

export function ShopLaunchCallToAction() {
  return (
    <div className="relative bg-neutral-900 ">
      <div className="absolute bottom-0 left-0 flex">
        <Image src={shopTshirts} alt="" />
      </div>
      <div className="absolute bottom-0 right-0 hidden max-h-[529px] md:flex">
        <Image src={shopHats} alt="" />
      </div>
      <div className="h-grid-line h-[1px]"></div>
      <div className="relative z-40 mx-12 my-32 flex flex-col items-center lg:mx-32">
        <Title>
          <span className="max-w-2xl text-center leading-10 md:text-[32px]">
            Launch your own Swag Shop today
          </span>
        </Title>
        <Subtitle paddingTop={true} paddingBottom={true}>
          <span className="max-w-2xl text-center md:text-xl">
            Get in touch to connect with our team and start the process of
            launching your web3 swag shop!
          </span>
        </Subtitle>
        <ShopButton bgColor="purple" text="request a quote" url="/contact" />
      </div>
      <div className="h-grid-line h-[1px]"></div>
    </div>
  )
}
