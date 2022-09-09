import Image, { StaticImageData } from 'next/image'
import classnames from 'classnames'

export interface ProjectsCardsProps {
  id: number
  bgColor: string
  projectImg: StaticImageData | string
  clientLogo: StaticImageData | string
  services: string[]
  tools: string[]
  mainDescription: string
  secoundDescription?: string
}

export function ProjectsCards({
  bgColor,
  projectImg,
  clientLogo,
  services,
  tools,
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

  console.log(projectImg)
  return (
    <div className="sm:px-12 md:px-36">
      <div className="flex-col lg:flex-row flex py-8 md:py-36 justify-center items-center">
        <div className="relative">
          <div
            className={classnames(
              'min-w-[285px] min-h-[170px] md:min-w-[500px] md:min-h-[273px]',
              bgColors[bgColor]
            )}
          ></div>
          <div
            className={classnames(
              'absolute min-w-[285px] min-h-[170px] md:min-w-[500px] md:min-h-[273px] max-h-[273px] bg-neutral-900 top-6 left-6 border border-pinkPotion-300'
            )}
          >
            <div className="relative z-10 h-4 md:h-7 bg-neutral-900 border-b border-pinkPotion-300 flex items-center">
              <div className="h-2 w-2 md:h-[10px] md:w-[10px] bg-[#C91912] rounded-full ml-2"></div>
              <div className="h-2 w-2 md:h-[10px] md:w-[10px] bg-misticOrange-300 rounded-full ml-2"></div>
              <div className="h-2 w-2 md:h-[10px] md:w-[10px] bg-[#00BF76] rounded-full ml-2"></div>
            </div>
            <div className="min-w-[285px] min-h-[170px] md:min-w-[500px] md:min-h-[273px]">
              <Image src={projectImg} alt="" layout="fill" />
            </div>
          </div>
        </div>
        <div className="grid gap-y-5 md:ml-[72px] mt-24 lg:mt-0">
          <div className="flex justify-center md:justify-start">
            <Image src={clientLogo} alt="" />
          </div>
          <div className="flex justify-center md:justify-start">
            {services.map((service, i, arr) => {
              if (arr.length - 1 === i) {
                return (
                  <p
                    key={service}
                    className="px-2 uppercase font-akira text-xs sm:text-[18px] md:text-2xl"
                  >
                    {service}
                  </p>
                )
              } else {
                return (
                  <div className="flex">
                    <p
                      key={service}
                      className="px-2 uppercase font-akira text-xs sm:text-[18px] md:text-2xl"
                    >
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
          <div className="flex justify-center md:justify-start">
            {tools.map((tool, i, toolSubArr) => {
              if (toolSubArr.length - 1 === i) {
                return (
                  <p key={tool} className="px-2 uppercase text-xs sm:text-base">
                    {tool}
                  </p>
                )
              } else {
                return (
                  <div className="flex flex-row">
                    <p
                      key={tool}
                      className="px-2 uppercase text-xs sm:text-base"
                    >
                      {tool}
                    </p>
                    <p className="text-xs sm:text-base">|</p>
                  </div>
                )
              }
            })}
          </div>
          <p className="px-2 max-w-[650px] text-[20px] leading-7 text-center md:text-start">
            {mainDescription}
          </p>
          {secoundDescription && (
            <p className="px-2 max-w-[650px] text-[20px] leading-7 text-center md:text-start">
              {secoundDescription}
            </p>
          )}
        </div>
      </div>
      <div className="h-grid-line h-[1px]"></div>
    </div>
  )
}
