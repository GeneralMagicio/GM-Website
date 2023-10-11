import Image from 'next/image'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { LayoutHero } from '../base/LayoutHero'
import plantL from 'public/images/homePlantL.svg'
import plantR from 'public/images/homePlantR.svg'
import down from 'public/images/icons/down.svg'
import aguila from 'public/images/aguila.png'

interface HomeHeroProps {
  handleScroll: () => void
}

export function HomeHero({ handleScroll }: HomeHeroProps) {
  return (
    <LayoutHero>
      <div className="flex h-full justify-between">
        <div className="absolute inset-0 bg-neutral-900 bg-home bg-cover bg-center bg-no-repeat bg-blend-multiply" />
        <div className="absolute right-20 top-20 hidden md:block lg:right-56 xl:right-64 2xl:right-96">
          <Image src={aguila} alt="making magic happen" />
        </div>
        <div className="flex items-end self-end">
          <Image src={plantL} alt="plant" />
        </div>
        <div className="z-40 self-center">
          <Title>
            <span>We build</span>
            <span>Web3 products,</span>
            <span>governance,</span>
            <span>and economic systems</span>
          </Title>
          <div className="flex flex-col items-center lg:mb-8 lg:flex-row">
            <Subtitle paddingBottom={false} paddingTop={true}>
              <span className="max-w-[700px]">
                Web3 professionals building social impact solutions throughout Web3 and Public Goods space.
              </span>
            </Subtitle>
            <button
              onClick={handleScroll}
              className="my-4 h-8 w-8 animate-bounce self-start hover:opacity-70 lg:mx-8 lg:h-12 lg:w-12 lg:self-center"
            >
              <Image src={down} alt="Down" />
            </button>
          </div>
        </div>
        <div className="flex items-end justify-end self-end">
          <Image src={plantR} alt="plant" height={641} width={240} />
        </div>
      </div>
    </LayoutHero>
  )
}
