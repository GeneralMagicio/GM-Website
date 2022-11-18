import React from 'react'
import Image from 'next/image'
import classnames from 'classnames'
import swiperLogo from 'public/images/icons/swiper.svg'

interface SwipperNextProps {
  swiper: any
  isEnd: boolean
}

export const SwiperButtonNext = ({ swiper, isEnd }: SwipperNextProps) => {
  return (
    <button
      onClick={() => swiper.slideNext()}
      className={classnames(
        'px-3 py-2 md:px-[18px] md:py-[10px]',
        isEnd === true ? 'bg-magicPurple-500' : 'bg-magicPurple-300'
      )}
    >
      <div className="flex h-6 w-3 rotate-180 items-center md:h-8 md:w-4">
        <Image src={swiperLogo} alt="" />
      </div>
    </button>
  )
}
