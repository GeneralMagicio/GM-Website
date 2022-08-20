import React from 'react'
import classnames from 'classnames'
import swiperLogo from '../../../public/images/swiper.svg'
import Image from 'next/image'

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
      <div className="flex items-center rotate-180 w-3 h-6 md:w-4 md:h-8">
        <Image src={swiperLogo} alt="" />
      </div>
    </button>
  )
}
