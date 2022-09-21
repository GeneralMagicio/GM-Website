import Image from 'next/image'
import { ShopButton } from '../base/ShopButton'
import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'
import shopHats from '../../../public/images/shopHats.png'
import shopTshirts from '../../../public/images/shopTshirts.png'

export function ShopLaunchCallToAction() {
  return (
    <div className="bg-neutral-900 relative ">
      <div className="absolute bottom-0 flex left-0">
        <Image src={shopTshirts} alt="" />
      </div>
      <div className="hidden md:flex absolute bottom-0 right-0 max-h-[529px]">
        <Image src={shopHats} alt="" />
      </div>
      <div className="h-grid-line h-[1px]"></div>
      <div className="relative z-40 flex flex-col items-center mx-12 lg:mx-32 my-32">
        <Title>
          <span className="text-center md:text-[32px] max-w-2xl leading-10">
            Launch your own Swag Shop today
          </span>
        </Title>
        <Subtitle paddingTop={true} paddingBottom={true}>
          <span className="text-center md:text-xl max-w-2xl">
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
