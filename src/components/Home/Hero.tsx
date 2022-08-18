import { Title } from '../base/Title'
import { Subtitle } from '../base/Subtitle'
import Image from 'next/image'
import plantL from '../../../public/images/homePlantL.svg'
import plantR from '../../../public/images/homePlantR.svg'
import down from '../../../public/images/down.svg'
import aguila from '../../../public/images/aguila.png'

export function HomeHero() {
  return (
    <>
      <div className="relative lg:h-[calc(100vh_-_108px)] pt-24">
        <div className="flex justify-between h-full">
          <div className="absolute inset-0 bg-home bg-cover bg-center bg-no-repeat bg-neutral-900 bg-blend-multiply" />
          <div className="hidden md:block absolute 2xl:right-96 xl:right-64 lg:right-56 right-20 top-20">
            <Image src={aguila} alt="making magic happen" />
          </div>
          <div className="self-end flex items-end">
            <Image src={plantL} alt="plant" />
          </div>
          <div className="self-center z-40">
            <Title>
              <span>Solution</span>
              <span>services</span>
              <span>for Impact</span>
              <span>DAO&apos;S</span>
            </Title>
            <Subtitle>
              <span className="hidden lg:flex flex-col">
                <span>
                  We are a group of Web3 professionals with deep roots/
                </span>
                <span>embedded in the Ethereum ecosystem devoted to</span>
                <span>
                  supporting commons-based organizations and public good
                </span>
                <span>projects.</span>
              </span>
              <span className="flex lg:hidden md:pr-64">
                We are a group of Web3 professionals with deep roots/ embedded
                in the Ethereum ecosystem devoted to supporting commons-based
                organizations and public good projects.
              </span>
            </Subtitle>
            <button className="hover:opacity-70 mb-12 w-8 h-8 lg:h-12 lg:w-12">
              <Image src={down} alt="Down" />
            </button>
          </div>
          <div className="self-end flex items-end justify-end">
            <Image src={plantR} alt="plant" height={641} width={240} />
          </div>
        </div>
      </div>
    </>
  )
}
