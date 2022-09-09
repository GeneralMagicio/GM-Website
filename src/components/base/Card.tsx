import classnames from 'classnames'
import Image from 'next/image'
import leftArrow from '../../../public/images/leftArrow.svg'

interface ProjectsCard {
  title: string
  description: string
  bgColor: string
}

export function ProjectCard({ title, description, bgColor }: ProjectsCard) {
  const bgColors: { [key: string]: string } = {
    white: 'bg-white',
    gray: 'bg-neutral-900',
    orange: 'bg-misticOrange-300',
    purple: 'bg-magicPurple-300',
    pink: 'bg-pinkPotion-300',
    blue: 'bg-magicSky-300',
  }
  return (
    <div
      className={classnames(
        'relative lg:min-w-[535px] lg:h-[595px] min-w-[274px] h-[306px]',
        bgColors[bgColor]
      )}
    >
      <div className="absolute card top-[-20px] left-5 lg:w-[535px] lg:h-[595px] w-[274px] h-[306px] flex justify-center items-center">
        <div className="flex flex-col justify-between bg-neutral-900 lg:h-[593px] lg:w-[532px] w-[272px] h-[304px]">
          <div className="flex m-7 self-end">
            <p className="uppercase text-magicSky-300 mr-2 text-xs lg:text-base">
              Learn more
            </p>
            <Image src={leftArrow} alt="" />
          </div>
          <div className="mx-4 pb-4">
            <h2 className="font-akira text-xl lg:text-[40px] lg:leading-[48px]">
              {title}
            </h2>
            <p className="text-sm lg:text-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
