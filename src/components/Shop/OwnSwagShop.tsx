import Image from 'next/image'
import plantR from '../../../public/images/homePlantR.svg'
import shopHat from '../../../public/images/shopHat.png'
import shopMockup from '../../../public/images/shopMockup.svg'
import plantL90 from '../../../public/images/plantL90.svg'
import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'

export function OwnSwagShop() {
  return (
    <div className="relative bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900 py-24">
      <div className="hidden md:block absolute right-0 top-0 z-40">
        <Image src={plantR} alt="plant" height={641} width={240} />
      </div>
      <div className="hidden md:block absolute left-0 bottom-0">
        <Image src={plantL90} alt="plant" />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center md:mb-24">
        <div className="md:pl-24">
          <p className="uppercase text-magicSky-300 tracking-[4px]">
            Launch your own Swag Shop
          </p>
          <Title>
            <span className="md:text-[40px] leading-[40px] max-w-[450px]">
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
      <div className="flex flex-col md:flex-row justify-center items-center relative z-50">
        <Image src={shopMockup} alt="" />
        <div className="ml-24">
          <p className="uppercase text-magicSky-300 tracking-[4px]">
            Launch your own Swag Shop
          </p>
          <Title>
            <span className="md:text-[40px] leading-[40px] max-w-[450px]">
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
      </div>
    </div>
  )
}
