import Image from 'next/image'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { ShopButton } from '@/components/base/ShopButton'
import readyL from 'public/images/readyL.svg'
import readyR from 'public/images/readyR.svg'

export function ShopAreYouReady() {
  return (
    <div className="bg-neutral-900 relative ">
      <div className="hidden md:flex absolute bottom-0 left-0">
        <Image src={readyL} alt="" />
      </div>
      <div className="hidden md:flex absolute bottom-0 right-0">
        <Image src={readyR} alt="" />
      </div>
      <div className="md:hidden flex absolute bottom-0 left-0 justify-start">
        <Image src={readyL} alt="" height={150} width={150} />
      </div>
      <div className="md:hidden flex absolute bottom-0 right-0">
        <Image src={readyR} alt="" height={150} width={150} />
      </div>
      <div className="h-grid-line h-[1px]"></div>
      <div className="relative z-40 flex flex-col items-center mx-12 lg:mx-32 my-32">
        <Title>
          <span className="text-center md:text-[32px]">Are you ready?</span>
        </Title>
        <Subtitle paddingTop={true} paddingBottom={true}>
          <span className="text-center md:text-xl max-w-2xl">
            Get an out of the box Swag Shop or let us help you customize it to
            your specific needs, and start distributing your DAO Merch.
          </span>
        </Subtitle>
        <ShopButton bgColor="purple" text="get your swag shop" url="/contact"/>
      </div>
      <div className="h-grid-line h-[1px]"></div>
    </div>
  )
}
