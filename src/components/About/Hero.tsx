import Image from 'next/image'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { Button } from '@/components/base/Button'
import { LayoutHero } from '@/components/base/LayoutHero'
import down from 'public/images/icons/down.svg'
import aboutAguila from 'public/images/assets/aboutAguila.png'

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
      <LayoutHero>
        <div className="flex h-full items-center justify-between py-8">
          <div className="absolute inset-0 bg-neutral-900 bg-about bg-cover bg-center bg-no-repeat mix-blend-overlay" />
          <div className="z-40 pl-10 sm:pl-16 md:pl-24 lg:pl-32">
            <Title>
              <span>Wizards</span>
              <span>of web3</span>
            </Title>
            <div className="flex flex-col items-center lg:flex-row 2xl:my-6">
              <p className="my-2 max-w-[320px] self-start text-xl md:max-w-[660px] md:text-2xl md:leading-[53px] lg:my-4 lg:text-4xl xl:text-[40px] 2xl:my-8">
                Who we are
              </p>
              <div className="block w-2/3 self-start md:hidden">
                <Subtitle paddingBottom={false} paddingTop={false}>
                  {projectsTextFirst}
                </Subtitle>
              </div>
              <button
                onClick={handleScroll}
                className="my-4 block h-8 w-8 self-start hover:opacity-70 md:hidden lg:mx-8 lg:h-12 lg:w-12 lg:self-center"
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
                  externalLink={false}
                />
              </div>
            </div>
          </div>
          <div className="hidden h-fit w-[600px] md:block">
            <Image
              src={aboutAguila}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="absolute top-32 right-0 block brightness-50 xs:top-64 md:hidden">
            <Image src={aboutAguila} alt="" width={350} height={350} />
          </div>
        </div>
      </LayoutHero>
      <div className="block md:hidden">
        <div className="py-10">
          <p className="px-12 text-center sm:py-10">{projectsTextSecond}</p>
          <div className=" flex justify-center px-12 pt-8">
            <Button
              url="/contact"
              arrowColor="#ffff"
              bgColor="purple"
              text="Work with us"
              breakText={true}
              externalLink={true}
            />
          </div>
        </div>
      </div>
    </>
  )
}
