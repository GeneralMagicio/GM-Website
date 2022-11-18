import Image from 'next/image'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { LayoutHero } from '@/components/base/LayoutHero'
import projectsHero from 'public/images/projectsHero.png'
import projectsHeroMobile from 'public/images/projectsHeroMobile.png'
import down from 'public/images/icons/down.svg'

interface ProjectHeroProps {
  handleScroll: () => void
}

const projectsText =
  'Browse some of our ongoing and successfully completed projects below, to learn about how we support impact DAOs.'

export function ProjectsHero({ handleScroll }: ProjectHeroProps) {
  return (
    <>
      <LayoutHero>
        <div className="flex h-full items-center justify-center px-10 py-8 sm:px-16 md:px-24 lg:px-32">
          <div className="absolute inset-0 bg-neutral-900 bg-projects bg-cover bg-center bg-no-repeat" />
          <div className="z-40">
            <Title>
              <span>Projects</span>
              <span>we</span>
              <span>Support</span>
            </Title>
            <div className="flex flex-col items-center lg:flex-row 2xl:my-6">
              <p className="my-2 max-w-[320px] text-xl md:max-w-[660px] md:text-2xl md:leading-[53px] lg:my-4 lg:text-4xl xl:text-[40px] 2xl:my-8">
                We work alongside core teams to grow their impact
              </p>
              <button
                onClick={handleScroll}
                className="my-4 block h-8 w-8 self-start hover:opacity-70 md:hidden lg:mx-8 lg:h-12 lg:w-12 lg:self-center"
              >
                <Image src={down} alt="Down" />
              </button>
            </div>
            <div className=" hidden md:block lg:mb-8">
              <Subtitle paddingBottom={false} paddingTop={false}>
                <span className="max-w-[700px]">{projectsText}</span>
              </Subtitle>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={projectsHero} alt="" height={625} width={500} />
          </div>
          <div className="absolute top-32 right-0 block brightness-50 md:hidden">
            <Image src={projectsHeroMobile} alt="" />
          </div>
        </div>
      </LayoutHero>
      <div className="block md:hidden">
        <div className="h-grid-line h-[1px]"></div>
        <p className="px-12 py-6 text-center sm:py-10">{projectsText}</p>
        <div className="h-grid-line h-[1px]"></div>
      </div>
    </>
  )
}
