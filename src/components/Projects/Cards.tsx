import Image, { StaticImageData } from 'next/image'
import classnames from 'classnames'

export interface ProjectsCardsProps {
  id: number
  bgColor: string
  projectUrl: string
  projectImg: StaticImageData | string
  clientLogo: StaticImageData | string
  services: string[]
  tools: string[]
  tools2row?: string[]
  mainDescription: string
  secoundDescription?: string
}

export function ProjectsCards({
  bgColor,
  projectUrl,
  projectImg,
  clientLogo,
  services,
  tools,
  tools2row,
  mainDescription,
  secoundDescription,
}: ProjectsCardsProps) {
  const bgColors: { [key: string]: string } = {
    white: 'bg-white',
    gray: 'bg-neutral-900',
    orange: 'bg-misticOrange-300',
    purple: 'bg-magicPurple-300',
    pink: 'bg-pinkPotion-300',
    blue: 'bg-magicSky-300',
  }
  return (
    <div className="sm:px-12 md:px-36">
      <div className="flex flex-col items-center justify-center py-8 md:py-36 lg:flex-row">
        <div className="relative">
          <div
            className={classnames(
              'min-h-[170px] min-w-[285px] md:min-h-[273px] md:min-w-[500px]',
              bgColors[bgColor]
            )}
          ></div>
          <div
            className={classnames(
              'absolute top-2 left-2 max-h-[273px] min-h-[170px] min-w-[285px] border border-pinkPotion-300 bg-neutral-900 md:top-6 md:left-6 md:min-h-[273px] md:min-w-[500px]'
            )}
          >
            <div className="relative z-10 flex h-4 items-center border-b border-pinkPotion-300 bg-neutral-900 md:h-7">
              <div className="ml-2 h-2 w-2 rounded-full bg-[#C91912] md:h-[10px] md:w-[10px]"></div>
              <div className="ml-2 h-2 w-2 rounded-full bg-misticOrange-300 md:h-[10px] md:w-[10px]"></div>
              <div className="ml-2 h-2 w-2 rounded-full bg-[#00BF76] md:h-[10px] md:w-[10px]"></div>
            </div>
            <div className="min-h-[170px] min-w-[285px] md:min-h-[273px] md:min-w-[500px]">
              <Image src={projectImg} alt="" layout="fill" />
            </div>
          </div>
        </div>
        <div className="mt-24 grid gap-y-5 md:ml-[72px] lg:mt-0">
          <a
            className="flex justify-center hover:cursor-pointer lg:w-fit lg:justify-start"
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={clientLogo} alt="" />
          </a>
          <div className="flex justify-center lg:justify-start">
            {services.map((service, i, arr) => {
              if (arr.length - 1 === i) {
                return (
                  <p
                    key={service}
                    className="px-2 font-akira text-xs uppercase sm:text-[18px] md:text-2xl"
                  >
                    {service}
                  </p>
                )
              } else {
                return (
                  <div className="flex" key={service}>
                    <p className="px-2 font-akira text-xs uppercase sm:text-[18px] md:text-2xl">
                      {service}
                    </p>
                    <p className="font-akira text-xs sm:text-[18px] md:text-2xl">
                      |
                    </p>
                  </div>
                )
              }
            })}
          </div>
          <div className="flex justify-center lg:justify-start">
            {tools.map((tool, i, toolSubArr) => {
              if (toolSubArr.length - 1 === i) {
                return (
                  <p key={tool} className="px-2 text-xs uppercase sm:text-base">
                    {tool}
                  </p>
                )
              } else {
                return (
                  <div className="flex flex-row" key={tool}>
                    <p className="whitespace-nowrap px-2 text-xs uppercase sm:text-base">
                      {tool}
                    </p>
                    <p className="text-xs sm:text-base">|</p>
                  </div>
                )
              }
            })}
          </div>
          <div className="flex justify-center lg:justify-start">
            {tools2row &&
              tools2row.map((tool2row, i, toolSubArr) => {
                if (toolSubArr.length - 1 === i) {
                  return (
                    <p
                      key={tool2row}
                      className="px-2 text-xs uppercase sm:text-base"
                    >
                      {tool2row}
                    </p>
                  )
                } else {
                  return (
                    <div className="flex flex-row" key={tool2row}>
                      <p className="whitespace-nowrap px-2 text-xs uppercase sm:text-base">
                        {tool2row}
                      </p>
                      <p className="text-xs sm:text-base">|</p>
                    </div>
                  )
                }
              })}
          </div>
          <p className="max-w-[650px] px-10 text-center text-[20px] leading-7 sm:px-12 md:px-0 lg:text-start">
            {mainDescription}
          </p>
          {secoundDescription && (
            <p className="max-w-[650px] px-10 text-center text-[20px] leading-7 sm:px-12 md:px-0 lg:text-start">
              {secoundDescription}
            </p>
          )}
        </div>
      </div>
      <div className="h-grid-line h-[1px]"></div>
    </div>
  )
}
