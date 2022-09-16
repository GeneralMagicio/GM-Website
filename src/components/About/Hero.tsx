import Image from 'next/image'
import { Title } from '../base/Title'
import down from '../../../public/images/down.svg'
import { Subtitle } from '../base/Subtitle'
import aboutAguila from '../../../public/images/aboutAguila.png'
import { Button } from '../base/Button'

interface AboutHeroProps {
  handleScroll: () => void
}

export function AboutHero({ handleScroll }: AboutHeroProps) {
  const projectsTextFirst =
    'We are an elite group of Web3 professionals exclusively supporting organizations that create greater value for society. '
  const projectsTextSecond =
    'We do that by creating digital products, governance, and economic systems utilizing Web3 technology.'

  return (
    <>
      <div className="relative h-[calc(100vh_-_108px)] min-h-[552px] py-8">
        <div className="flex justify-between h-full items-center ">
          <div className="absolute inset-0 bg-about bg-cover bg-center bg-no-repeat bg-neutral-900 mix-blend-overlay" />
          <div className="z-40 pl-10 sm:pl-16 md:pl-24 lg:pl-32">
            <Title>
              <span>Wizards</span>
              <span>of web3</span>
            </Title>
            <div className="flex flex-col items-center lg:flex-row 2xl:my-6">
              <p className="text-xl md:text-2xl lg:text-4xl xl:text-[40px] max-w-[320px] md:max-w-[660px] md:leading-[53px] my-2 lg:my-4 2xl:my-8 self-start">
                Who we are
              </p>
              <div className="block md:hidden w-2/3 self-start">
                <Subtitle paddingBottom={false} paddingTop={false}>
                  {projectsTextFirst}
                </Subtitle>
              </div>
              <button
                onClick={handleScroll}
                className="block md:hidden hover:opacity-70 lg:mx-8 my-4 w-8 h-8 lg:h-12 lg:w-12 self-start lg:self-center"
              >
                <Image src={down} alt="Down" />
              </button>
            </div>
            <div className="hidden md:block">
              <Subtitle paddingBottom={false} paddingTop={false}>
                <span className="max-w-[700px]">
                  {projectsTextFirst}
                  {projectsTextSecond}
                </span>
              </Subtitle>
              <div className="pt-8">
                <Button
                  url="/contact"
                  arrowColor="#ffff"
                  bgColor="purple"
                  text="Work with us"
                  breakText={true}
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block w-[600px] h-fit">
            <Image
              src={aboutAguila}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="block md:hidden absolute top-32 xs:top-64 right-0 brightness-50">
          <Image src={aboutAguila} alt="" width={350} height={350} />
        </div>
      </div>
      <div className="block md:hidden">
        <div className="py-10">
          <p className="text-center px-12 sm:py-10">{projectsTextSecond}</p>
          <div className=" pt-8 px-12 flex justify-center">
            <Button
              url="/"
              arrowColor="#ffff"
              bgColor="purple"
              text="Work with us"
              breakText={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}
