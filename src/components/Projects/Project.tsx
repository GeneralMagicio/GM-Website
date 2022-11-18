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
      <div className="relative flex flex-col items-center justify-center sm:px-12 md:justify-start md:px-36 lg:flex-row">
        <div className="z-50 ml-0 mt-12 grid gap-y-12 px-10 sm:px-12 md:mt-0 md:px-0 xl:ml-[72px]">
          <a
            className="flex justify-center hover:cursor-pointer xl:w-fit xl:justify-start"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={clientLogo} alt="" />
          </a>
          <p className="text-center text-sm leading-7 tracking-[5%] lg:text-2xl xl:max-w-[650px] xl:text-start">
            {description}
          </p>
          <div className='flex justify-center xl:hidden'>
            <Image src={projectImgMobile} alt="" />
          </div>
          <div className='flex flex-col items-center xl:items-start'>
            <h3 className='uppercase tracking-[4px]'>Work we did</h3>
            <ul className='ml-5 mt-4 flex list-disc flex-col items-center'>

              {workWeDid.map((work) => {
                return (
                  <li key={work} className="w-fit text-center xl:w-full xl:text-left">{work}</li>
                )
              })}
            </ul>
          </div>
          <div className='flex flex-col items-center xl:max-w-xs xl:items-start'>
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
        <div className='absolute top-0 right-0 hidden xl:block'>
          <Image src={projectImgDesktop} alt={projectUrlLabel} />
        </div>
      </div>
    </div>
  )
}
