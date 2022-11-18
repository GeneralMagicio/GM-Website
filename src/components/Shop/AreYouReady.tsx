import Image from 'next/image'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { ShopButton } from '@/components/base/ShopButton'
import readyL from 'public/images/readyL.svg'
import readyR from 'public/images/readyR.svg'

export function ShopAreYouReady() {
  return (
    <div className="relative bg-neutral-900 ">
      <div className="absolute bottom-0 left-0 hidden md:flex">
        <Image src={readyL} alt="" />
      </div>
      <div className="absolute bottom-0 right-0 hidden md:flex">
        <Image src={readyR} alt="" />
      </div>
      <div className="absolute bottom-0 left-0 flex justify-start md:hidden">
        <Image src={readyL} alt="" height={150} width={150} />
      </div>
      <div className="absolute bottom-0 right-0 flex md:hidden">
        <Image src={readyR} alt="" height={150} width={150} />
      </div>
      <div className="h-grid-line h-[1px]"></div>
      <div className="relative z-40 mx-12 my-32 flex flex-col items-center lg:mx-32">
        <Title>
          <span className="text-center md:text-[32px]">Are you ready?</span>
        </Title>
        <Subtitle paddingTop={true} paddingBottom={true}>
          <span className="max-w-2xl text-center md:text-xl">
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
