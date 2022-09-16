import { AboutValue, AboutValueProps } from './Value'
import whatWeAre from '../../../public/images/values/whatWeAre.png'
import whyWeDoIt from '../../../public/images/values/whyWeDoIt.png'
import howAreWeFunded from '../../../public/images/values/howAreWeFunded.png'

export function AboutValues() {
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
      titleFirst: 'What',
      titleSecond: 'We do',
      image: whyWeDoIt,
      imageAlt: 'How are funded',
      description:
        '2Our Mission is to make magic happen! We do this by supporting crypto-philanthropic organizations and communities to reach their full potential, collaborating with them in a diverse range of capacities. The source of our magic thrives on the digital winds of the Blockchain4Good universe.',
      componentPosition: 'right',
    },
    {
      titleFirst: 'What',
      titleSecond: 'We do',
      image: howAreWeFunded,
      imageAlt: 'How are funded',
      description:
        '1Our Mission is to make magic happen! We do this by supporting crypto-philanthropic organizations and communities to reach their full potential, collaborating with them in a diverse range of capacities. The source of our magic thrives on the digital winds of the Blockchain4Good universe.',
      componentPosition: 'left',
    },
  ]

  return (
    <div className="md:pb-24 pb-16">
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
    </div>
  )
}
