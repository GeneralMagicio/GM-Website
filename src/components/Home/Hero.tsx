import { Title } from '../base/Title'
import { Subtitle } from '../base/Subtitle'
import Image from 'next/image'
import plantL from '../../../public/images/homePlantL.svg'
import plantR from '../../../public/images/homePlantR.svg'
import down from '../../../public/images/icons/down.svg'
import aguila from '../../../public/images/aguila.png'

interface HomeHeroProps {
  handleScroll: () => void
}

export function HomeHero({ handleScroll }: HomeHeroProps) {
  return (
    <>
      <div className="relative h-[calc(100vh_-_108px)] min-h-[552px]">
        <div className="flex justify-between h-full">
          <div className="absolute inset-0 bg-home bg-cover bg-center bg-no-repeat bg-neutral-900 bg-blend-multiply" />
          <div className="hidden md:block absolute 2xl:right-96 xl:right-64 lg:right-56 right-20 top-20">
            <Image src={aguila} alt="making magic happen" />
          </div>
          <div className="self-end flex items-end">
            <Image src={plantL} alt="plant" />
          </div>
          <div className="z-40 self-center">
            <Title>
              <span>Solution</span>
              <span>services</span>
              <span>for Impact</span>
              <span>DAO&apos;S</span>
            </Title>
            <div className="flex flex-col items-center lg:flex-row lg:mb-8">
              <Subtitle paddingBottom={false} paddingTop={true}>
                <span className="max-w-[700px]">
                  We are a group of Web3 professionals with deep roots/ embedded
                  in the Ethereum ecosystem devoted to supporting commons-based
                  organizations and public good projects.
                </span>
              </Subtitle>
              <button
                onClick={handleScroll}
                className="animate-bounce hover:opacity-70 lg:mx-8 my-4 w-8 h-8 lg:h-12 lg:w-12 self-start lg:self-center"
              >
                <Image src={down} alt="Down" />
              </button>
            </div>
          </div>
          <div className="self-end flex items-end justify-end">
            <Image src={plantR} alt="plant" height={641} width={240} />
          </div>
        </div>
      </div>
    </>
  )
}
