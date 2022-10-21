import Image from 'next/image'
import { AboutValue, AboutValueProps } from '@/components/About/Value'
import membersBg from 'public/images/members.png'
import shopWallet from 'public/images/shopWallet.svg'
import shopApparel from 'public/images/shopApparel.png'
import shopElipse from 'public/images/shopElipse.png'
import stars from 'public/images/stars.png'
import plantL from 'public/images/homePlantL.svg'

export function ShopFeatures() {
  const values: AboutValueProps[] = [
    {
      titleFirst: 'DAO',
      titleSecond: 'Friendly',
      image: membersBg,
      imageAlt: 'How are funded',
      description:
        'We take care of everything for you. No need for a bank account or anything else on your side. Collect profits straight into your crypto address.',
      componentPosition: 'left',
    },
    {
      titleFirst: 'Web3',
      titleSecond: 'native',
      image: shopWallet,
      imageAlt: 'How are funded',
      description:
        'Accept cryptocurrency, whitelist tokens, create your own merch token, respect user privacy and more! Get a shop that will achieve your goals and be aligned with your values',
      componentPosition: 'right',
    },
    {
      titleFirst: 'Custom',
      titleSecond: 'design',
      image: shopApparel,
      imageAlt: 'How are funded',
      description:
        'Stand out with a new look that fits the vibes of your community. Our designers can make magic happen!',
      componentPosition: 'left',
    },
    {
      titleFirst: 'Quality',
      titleSecond: 'experience',
      image: shopElipse,
      imageAlt: 'How are funded',
      description:
        'We know swag, and will ensure you have a wide selection of quality merch that is printed on demand and ships worldwide.',
      componentPosition: 'right',
    },
  ]
  return (
    <div className="bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900 md:pb-24 pb-16 relative pt-16 md:pt-0">
      {values.map((value) => {
        return (
          <AboutValue
            key={value.description}
            titleFirst={value.titleFirst}
            titleSecond={value.titleSecond}
            description={value.description}
            componentPosition={value.componentPosition}
            image={value.image}
            imageAlt={value.imageAlt}
          />
        )
      })}
      <div className="absolute left-0 top-0 z-20">
        <Image src={stars} alt="" width={163} height={163} />
      </div>
      <div className="hidden md:flex absolute bottom-[-63px] right-[64px] -rotate-90">
        <Image src={plantL} alt="plant" />
      </div>
    </div>
  )
}
