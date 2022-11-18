import React from 'react'
import Image from 'next/image'
import classnames from 'classnames'
import swiperLogo from 'public/images/icons/swiper.svg'


interface SwipperPrevProps {
  swiper: any
  isBeginning: boolean
}

export function SwiperButtonPrev({ swiper, isBeginning }: SwipperPrevProps) {
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className={classnames(
        'mr-1 px-3 py-2 md:px-[18px] md:py-[10px]',
        isBeginning === true ? 'bg-magicPurple-500' : 'bg-magicPurple-300'
      )}
    >
      <div className="flex h-6 w-3 items-center md:h-8 md:w-4">
        <Image src={swiperLogo} alt="" />
      </div>
    </button>
  )
}
