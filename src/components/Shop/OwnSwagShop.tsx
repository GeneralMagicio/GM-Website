import Image from 'next/image'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import plantR from 'public/images/assets/homePlantR.svg'
import shopHat from 'public/images/assets/shopHat.png'
import shopMockup from 'public/images/assets/shopMockup.svg'
import plantL90 from 'public/images/assets/plantL90.svg'

export function OwnSwagShop() {
  return (
    <div className="relative bg-neutral-900 bg-homeBg bg-cover bg-center bg-no-repeat py-24 bg-blend-darken">
      <div className="absolute right-0 top-0 z-40 hidden md:block">
        <Image src={plantR} alt="plant" height={641} width={240} />
      </div>
      <div className="absolute left-0 bottom-0 block">
        <Image src={plantL90} alt="plant" />
      </div>
      <div className="flex flex-col items-center justify-between md:mb-24 md:flex-row">
        <div className="relative z-50 px-8 md:px-0 md:pl-24">
          <p className="uppercase tracking-[4px] text-magicSky-300">
            Launch your own Swag Shop
          </p>
          <Title>
            <span className="max-w-[450px] text-[26px] leading-[40px] md:text-[40px]">
              White label web3 swag shop for DAOs
            </span>
          </Title>
          <Subtitle paddingTop={true} paddingBottom={false}>
            <span className="max-w-[450px]">
              Work with us to launch a web3 native swag shop under your own
              brand name. Our team has a proven track record, working with
              DAO&apos;s like ENS and Giveth and can help you put out merch that
              is in line with your community to build positive vibes and
              loyalty.
            </span>
          </Subtitle>
        </div>
        <Image src={shopHat} alt="" />
      </div>
      <div className="relative z-50 mt-10 flex flex-col-reverse items-center justify-center md:mt-0 md:flex-row">
        <Image src={shopMockup} alt="" />
        <div className="mb-10 px-8 md:ml-24 md:mb-0 md:px-0">
          <p className="uppercase tracking-[4px] text-magicSky-300">
            Launch your own Swag Shop
          </p>
          <Title>
            <span className="max-w-[450px] text-[26px] leading-[40px] md:text-[40px]">
              Crafted for web3
            </span>
          </Title>
          <Subtitle paddingTop={true} paddingBottom={false}>
            <span className="max-w-[450px]">
              Our web3 native team works with you every step of the way, from
              designing the perfect swag to setting up payments and your own
              merch tokens.
            </span>
          </Subtitle>
        </div>
      </div>
    </div>
  )
}
