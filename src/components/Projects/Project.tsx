import Image, { StaticImageData } from 'next/image'
import { OpinionCard } from '../Shop/OpinionCard'

export interface ProjectProps {
  id: number
  projectUrl: string
  projectImg: StaticImageData | string
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
  projectImg,
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
    <div className="relative flex-col lg:flex-row flex py-8 md:py-36 justify-center md:justify-start items-center sm:px-12 md:px-36">
      <div className="grid gap-y-12 md:ml-[72px] mt-24 lg:mt-0 z-50">
        <a
          className="flex justify-center lg:justify-start hover:cursor-pointer lg:w-fit"
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={clientLogo} alt="" />
        </a>
        <p className="px-10 sm:px-12 md:px-0 max-w-[650px] text-2xl leading-7 text-center lg:text-start tracking-[5%]">
          {description}
        </p>
        <div>
          <h3 className='uppercase tracking-[4px]'>Work we did</h3>
          <ul className='list-disc ml-5 mt-4'>

            {workWeDid.map((work) => {
              return (
                <li key={work}>{work}</li>
              )
            })}
          </ul>
        </div>
        <div className='max-w-xs'>
          <h3 className='uppercase tracking-[4px]'>About</h3>
          <p className='my-4'>{clientDescription}</p>
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
      <div className='absolute top-32 right-0'>
        <Image src={projectImg} alt={projectUrlLabel} />
      </div>
    </div>
  )
}
