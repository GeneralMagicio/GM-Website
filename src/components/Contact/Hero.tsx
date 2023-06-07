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
        <div className="flex h-full justify-center">
          <div className="absolute inset-0 bg-neutral-900 bg-contactMobile bg-cover bg-top bg-no-repeat md:bg-contact" />
          <div className="z-40 self-center px-10 md:px-20">
            <Title>
              <span className="lg:max-w-[700px] xl:max-w-[1000px]">
                Express your vision, we&apos;ll make it a reality
              </span>
            </Title>
            <div className="flex-col md:flex lg:mb-8 lg:flex-row lg:items-center">
              <Subtitle paddingBottom={false} paddingTop={true}>
                <span className="hidden max-w-[700px] md:block">
                  {description}
                </span>
              </Subtitle>
              <button
                onClick={handleScroll}
                className="my-4 h-8 w-8 animate-bounce self-start rounded-full bg-white p-1 hover:opacity-90 lg:mx-8 lg:h-12 lg:w-12 lg:self-center"
              >
                <Image src={down} alt="Down" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden items-end justify-end md:flex">
            <Image src={plantR} alt="plant" height={641} width={240} />
          </div>
          <div className="absolute bottom-32 flex items-end justify-end md:bottom-[-50px]">
            <Image src={contactBanner} alt="Let's work together" />
          </div>
        </div>
      </LayoutHero>
      <div className="block md:hidden">
        <div className="h-grid-line h-[1px]"></div>
        <p className="px-12 py-6 text-center sm:py-10">{description}</p>
        <div className="h-grid-line h-[1px]"></div>
      </div>
    </>
  )
}
