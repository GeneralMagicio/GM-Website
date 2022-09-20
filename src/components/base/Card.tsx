import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import leftArrow from '../../../public/images/icons/leftArrow.svg'
import { ShopButton } from './ShopButton'

interface ProjectsCard {
  title: string
  description: string
  bgColor: string
  page: string
  buttonBg?: string
  buttonText?: string
  url?: string
}

export function ProjectCard({
  title,
  description,
  bgColor,
  page,
  buttonBg,
  buttonText,
  url,
}: ProjectsCard) {
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
        'relative lg:min-w-[535px] lg:h-[595px] min-w-[274px] h-[306px] flex items-center justify-center',
        bgColors[bgColor]
      )}
    >
      <div className="absolute card top-[-20px] left-5 lg:w-[535px] lg:h-[595px] w-[274px] h-[306px] flex justify-center items-center">
        <div
          className={classnames(
            'flex flex-col bg-neutral-900 lg:h-[593px] lg:w-[532px] w-[272px] h-[304px]',
            page === 'Home' ? 'justify-between' : 'justify-end'
          )}
        >
          {page === 'Home' && (
            <div>
              <div className="flex m-7 self-end">
                {/* <p className="uppercase text-magicSky-300 mr-2 text-xs lg:text-base">
              Learn more
            </p>
            <Image src={leftArrow} alt="" /> */}
              </div>
              <div className="mx-4 pb-4">
                <h2 className="font-akira text-xl lg:text-[40px] lg:leading-[48px]">
                  {title}
                </h2>
                <p className="text-sm lg:text-2xl">{description}</p>
              </div>
            </div>
          )}
          {page === 'Shop' && buttonBg && buttonText && (
            <div>
              <div className="mx-4 pb-10">
                <h2 className="font-akira text-xl lg:text-[40px] lg:leading-[48px]">
                  {title}
                </h2>
                <p className="text-sm lg:text-2xl mt-3 mb-5">{description}</p>
                <ShopButton bgColor={buttonBg} text={buttonText} url={url} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
