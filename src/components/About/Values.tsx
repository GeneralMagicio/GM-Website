import { forwardRef } from 'react'
import { AboutValue, AboutValueProps } from '@/components/About/Value'
import whatWeAre from 'public/images/values/whatWeAre.png'
import whyWeDoIt from 'public/images/values/whyWeDoIt.png'
import howAreWeFunded from 'public/images/values/howAreWeFunded.png'

export const AboutValues = forwardRef<HTMLDivElement>((props, ref) => {
  const values: AboutValueProps[] = [
    {
      titleFirst: 'What',
      titleSecond: 'We do',
      image: whatWeAre,
      imageAlt: 'How are funded',
      description:
        'Our Mission is to make magic happen! We do this by supporting crypto-philanthropic organizations and communities to reach their full potential, collaborating with them in a diverse range of capacities. The source of our magic thrives on the digital winds of the Blockchain4Good universe.',
      componentPosition: 'left',
    },
    {
      titleFirst: 'why do',
      titleSecond: 'We do it',
      image: whyWeDoIt,
      imageAlt: 'How are funded',
      description:
        'The ecosystem of Blockchain projects, on Ethereum in particular, is growing at a lightning pace. With the rapid development of DeFi and DeGov the world needs talented sorcerers and sorceresses to build for-good tools leveraging Web3 innovations. General Magic was born out of the Giveth Galaxy; Immersed in a culture of Blockchain Philanthropy, we have the knowledge and insights to build a better future for the Decentralized Web.',
      componentPosition: 'right',
    },
    {
      titleFirst: 'How',
      titleSecond: 'Are we',
      titleThird: 'funded',
      image: howAreWeFunded,
      imageAlt: 'How are funded',
      description:
        'We are in the process of implementing a client payment-based model. We implement a combination of long-term work agreements with value-aligned DAOs and projects as well as stand-alone bounties, projects, and consultancy work to generate sustainable funding for General Magic.',
      componentPosition: 'left',
    },
  ]

  return (
    <div className="pb-16 md:pb-24" ref={ref}>
      {values.map((value) => {
        return (
          <AboutValue
            key={value.description}
            titleFirst={value.titleFirst}
            titleSecond={value.titleSecond}
            titleThird={value.titleThird}
            description={value.description}
            componentPosition={value.componentPosition}
            image={value.image}
            imageAlt={value.imageAlt}
          />
        )
      })}
    </div>
  )
})

AboutValues.displayName = 'AboutValues'
