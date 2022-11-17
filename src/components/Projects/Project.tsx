import Image, { StaticImageData } from 'next/image'
import { OpinionCard } from '../Shop/OpinionCard'

export interface ProjectProps {
  projectUrl: string
  projectImgDesktop: StaticImageData | string
  projectImgMobile: StaticImageData | string
  clientLogo: StaticImageData | string
  description: string
  workWeDid: string[]
  clientDescription: string
  clientName: string
  clientOrg: string
  textFirst: string
}

export function Project({
  projectUrl,
  projectImgDesktop,
  projectImgMobile,
  clientLogo,
  description,
  workWeDid,
  clientDescription,
  clientName,
  clientOrg,
  textFirst
}: ProjectProps) {

  const projectUrlLabel = projectUrl.slice(8, projectUrl.length - 1)

  return (
    <div className="py-8 md:py-20">
      <div className="relative flex-col lg:flex-row flex justify-center md:justify-start items-center sm:px-12 md:px-36">
        <div className="grid gap-y-12 ml-0 xl:ml-[72px] mt-12 md:mt-0 z-50 px-10 sm:px-12 md:px-0">
          <a
            className="flex justify-center xl:justify-start hover:cursor-pointer xl:w-fit"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={clientLogo} alt="" />
          </a>
          <p className="xl:max-w-[650px] text-sm lg:text-2xl leading-7 text-center xl:text-start tracking-[5%]">
            {description}
          </p>
          <div className='flex xl:hidden justify-center'>
            <Image src={projectImgMobile} alt="" />
          </div>
          <div className='flex flex-col items-center xl:items-start'>
            <h3 className='uppercase tracking-[4px]'>Work we did</h3>
            <ul className='list-disc ml-5 mt-4 flex flex-col items-center'>

              {workWeDid.map((work) => {
                return (
                  <li key={work} className="w-fit xl:w-full text-center xl:text-left">{work}</li>
                )
              })}
            </ul>
          </div>
          <div className='xl:max-w-xs flex flex-col items-center xl:items-start'>
            <h3 className='uppercase tracking-[4px]'>About</h3>
            <p className='my-4 text-center xl:text-left'>{clientDescription}</p>
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className='text-magicSky-300'
            >
              {projectUrlLabel}
            </a>
          </div>
          <OpinionCard
            clientName={clientName}
            clientOrg={clientOrg}
            textFirst={textFirst}
            shop={false}
          />
        </div>
        <div className='hidden xl:block absolute top-0 right-0'>
          <Image src={projectImgDesktop} alt={projectUrlLabel} />
        </div>
      </div>
    </div>
  )
}
