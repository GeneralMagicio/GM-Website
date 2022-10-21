import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'
import { WeDoCard, WeDoCardProps } from '@/components/Home/WeDo/Card'

export function HomeWhatWeDo() {
  const cards: WeDoCardProps[] = [
    {
      title: 'Dao Partnerships',
      description:
        'We partner with DAOs such as Giveth, Commons Stack, TEC and more, and actively participate in their governance.',
    },
    {
      title: 'Product Development',
      description:
        'Our robust R&D team is developing groundbreaking technologies and making ongoing contributions to the Ethereum ecosystem and the impact DAO space.',
    },
    {
      title: 'Technical Support',
      description:
        'We provide technical expertise, consulting and hands-on work to help you take your impact DAO to the next level.',
    },
  ]
  return (
    <div className="mt-20 md:mt-44 mx-12 lg:mx-32 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="grid md:grid-cols-2 md:gap-x-12 md:gap-y-[88px] gap-y-8">
          <Title>
            <span>What</span>
            <span>we do</span>
          </Title>
          <Subtitle paddingBottom={false} paddingTop={false}>
            General Magic is deploying resources to the most innovative
            DAO&apos;s that are building social impact solutions throughout Web3
            and Public Good space.
          </Subtitle>
          {cards.map((card) => {
            return (
              <WeDoCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
