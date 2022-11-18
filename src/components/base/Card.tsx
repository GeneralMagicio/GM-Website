import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import leftArrow from 'public/images/icons/leftArrow.svg'
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
    <div className='w-[294px] lg:w-fit'>
      <div
        className={classnames(
          'relative flex h-[306px] min-w-[274px] max-w-[274px] items-center justify-center lg:h-[595px] lg:min-w-[535px]',
          bgColors[bgColor]
        )}
      >
        <div className="card absolute top-[-20px] left-5 flex h-[306px] w-[274px] items-center justify-center lg:h-[595px] lg:w-[535px]">
          <div
            className={classnames(
              'flex h-[304px] w-[272px] flex-col bg-neutral-900 lg:h-[593px] lg:w-[532px]',
              page === 'Home' ? 'justify-between' : 'justify-end'
            )}
          >
            {page === 'Home' && (
              <div className="flex h-full flex-col justify-between">
                <div className="m-7 flex self-end">
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
                  <p className="mt-3 mb-5 text-sm lg:text-2xl">{description}</p>
                  <ShopButton bgColor={buttonBg} text={buttonText} url={url} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
