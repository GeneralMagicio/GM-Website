import Image from 'next/image'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'
import { LayoutHero } from '@/components/base/LayoutHero'
import plantR from 'public/images/homePlantR.svg'
import down from 'public/images/icons/down.svg'
import contactBanner from 'public/images/contactBanner.png'

interface ContactHeroProps {
  handleScroll: () => void
}

export function ContactHero({ handleScroll }: ContactHeroProps) {
  const description =
    'We are a group of Web3 professionals with deep roots/ embedded in the Ethereum ecosystem devoted to supporting commons-based organizations and public good projects.'
  return (
    <>
      <LayoutHero>
        <div className="flex justify-center h-full">
          <div className="absolute inset-0 bg-contactMobile md:bg-contact bg-cover bg-top bg-no-repeat bg-neutral-900" />
          <div className="z-40 self-center px-10 md:px-20">
            <Title>
              <span className="lg:max-w-[700px] xl:max-w-[1000px]">
                Tell us what you need and we will get it done
              </span>
            </Title>
            <div className="md:flex flex-col lg:items-center lg:flex-row lg:mb-8">
              <Subtitle paddingBottom={false} paddingTop={true}>
                <span className="hidden md:block max-w-[700px]">
                  {description}
                </span>
              </Subtitle>
              <button
                onClick={handleScroll}
                className="animate-bounce hover:opacity-90 lg:mx-8 my-4 w-8 h-8 lg:h-12 lg:w-12 self-start lg:self-center bg-white rounded-full p-1"
              >
                <Image src={down} alt="Down" />
              </button>
            </div>
          </div>
          <div className="hidden absolute bottom-0 right-0 md:flex items-end justify-end">
            <Image src={plantR} alt="plant" height={641} width={240} />
          </div>
          <div className="absolute bottom-32 md:bottom-[-50px] flex items-end justify-end">
            <Image src={contactBanner} alt="Let's work together" />
          </div>
        </div>
      </LayoutHero>
      <div className="block md:hidden">
        <div className="h-grid-line h-[1px]"></div>
        <p className="text-center px-12 py-6 sm:py-10">{description}</p>
        <div className="h-grid-line h-[1px]"></div>
      </div>
    </>
  )
}
