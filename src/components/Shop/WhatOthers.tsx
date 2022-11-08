import { useState } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'
import { SwiperButtonPrev } from '@/components/Home/SwipperPrevButton'
import { SwiperButtonNext } from '@/components/Home/SwipperNextButton'
import { OpinionCard, OpinionCardProps } from '@/components/Shop/OpinionCard'

export function ShopWhatOthers() {
  const [swiperIstance, setSwiperInstance] = useState({})
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  function handleSwiper(swiper: any) {
    swiper.isBeginning ? setIsBeginning(true) : setIsBeginning(false)
    swiper.isEnd ? setIsEnd(true) : setIsEnd(false)
  }

  const clientsOpinions: OpinionCardProps[] = [
    {
      clientOrg: 'Trusted Seed',
      textFirst:
        'Our Trusted Seed Swag shop project’s results were beyond our expectations. The GM team took our branding to the next level to adapt our store’s needs and communicate our values in the best way.',
      textSecond:
        'We look forward to work with them in the near future, and further develop our organization’s digital experience with new tools',
      clientName: 'Mafer',
      shop: true
    },
    {
      clientOrg: 'Giveth',
      textFirst:
        'The Swag Shop designed by General Magic has been a perfect solution to expand our line of products and services we offer at Giveth. It was easy to add new designs, coordinate shipping prices and allow users to pay with different types of tokens, including custom exchange rates and across different Ethereum chains. The General Magic team was very responsive and took the time to find unique solutions and troubleshoot any problems that arised. I would recommend the swag shop to any DAO or protocol looking to offer more to their users and token holders!',
      clientName: 'Mitch',
      shop: true
    },
  ]

  return (
    <div className="bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900 md:pb-24 pb-16 flex flex-col items-center justify-center pt-28">
      <Title>
        <span className="text-center md:text-[32px] max-w-2xl leading-10 px-8">
          What other say
        </span>
      </Title>
      <Subtitle paddingTop={true} paddingBottom={true}>
        <span className="text-center md:text-xl max-w-2xl px-8">
          Don&apos;t just take our word for it. See what other DAO&apos;s say
          about our swag shop service.
        </span>
      </Subtitle>
      <div className="md:hidden block mb-4">
        <SwiperButtonPrev swiper={swiperIstance} isBeginning={isBeginning} />
        <SwiperButtonNext swiper={swiperIstance} isEnd={isEnd} />
      </div>
      <div className="max-w-full px-3">
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          onRealIndexChange={(swiper) => handleSwiper(swiper)}
        >
          {clientsOpinions.map((opinion) => {
            return (
              <SwiperSlide key={opinion.clientName}>
                <div className="flex justify-center mt-5">
                  <OpinionCard
                    clientName={opinion.clientName}
                    clientOrg={opinion.clientOrg}
                    textFirst={opinion.textFirst}
                    textSecond={opinion.textSecond}
                    shop={opinion.shop}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="hidden md:block mt-4">
        <SwiperButtonPrev swiper={swiperIstance} isBeginning={isBeginning} />
        <SwiperButtonNext swiper={swiperIstance} isEnd={isEnd} />
      </div>
    </div>
  )
}
