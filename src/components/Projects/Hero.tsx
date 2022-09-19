import Image from 'next/image'
import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'
import projectsHero from '../../../public/images/projectsHero.png'
import projectsHeroMobile from '../../../public/images/projectsHeroMobile.png'
import down from '../../../public/images/down.svg'

interface ProjectHeroProps {
  handleScroll: () => void
}

const projectsText =
  'Browse some of our ongoing and successfully completed projects below, to learn about how we support impact DAOs.'

export function ProjectsHero({ handleScroll }: ProjectHeroProps) {
  return (
    <>
      <div className="relative h-[calc(100vh_-_108px)] min-h-[552px] py-8">
        <div className="flex justify-center h-full items-center px-10 sm:px-16 md:px-24 lg:px-32">
          <div className="absolute inset-0 bg-projects bg-cover bg-center bg-no-repeat bg-neutral-900" />
          <div className="z-40">
            <Title>
              <span>Projects</span>
              <span>we</span>
              <span>Support</span>
            </Title>
            <div className="flex flex-col items-center lg:flex-row 2xl:my-6">
              <p className="text-xl md:text-2xl lg:text-4xl xl:text-[40px] max-w-[320px] md:max-w-[660px] md:leading-[53px] my-2 lg:my-4 2xl:my-8">
                We work alongside core teams to grow their impact
              </p>
              <button
                onClick={handleScroll}
                className="block md:hidden hover:opacity-70 lg:mx-8 my-4 w-8 h-8 lg:h-12 lg:w-12 self-start lg:self-center"
              >
                <Image src={down} alt="Down" />
              </button>
            </div>
            <div className=" lg:mb-8 hidden md:block">
              <Subtitle paddingBottom={false} paddingTop={false}>
                <span className="max-w-[700px]">{projectsText}</span>
              </Subtitle>
            </div>
          </div>
          <div className="hidden md:block">
            <Image src={projectsHero} alt="" height={625} width={500} />
          </div>
        </div>
        <div className="block md:hidden absolute top-32 right-0 brightness-50">
          <Image src={projectsHeroMobile} alt="" />
        </div>
      </div>
      <div className="block md:hidden">
        <div className="h-grid-line h-[1px]"></div>
        <p className="text-center px-12 py-6 sm:py-10">{projectsText}</p>
        <div className="h-grid-line h-[1px]"></div>
      </div>
    </>
  )
}
