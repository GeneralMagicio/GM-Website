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
    <div className="mt-20 px-12 md:mt-44 md:px-20 lg:px-44 xl:px-64 ">
      <div className="flex flex-col items-center md:flex-row">
        <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-[88px]">
          <Title>
            <span>What</span>
            <span>we do</span>
          </Title>
          <div className='flex h-full items-center'>
            <Subtitle paddingBottom={false} paddingTop={false}>
              General Magic is deploying resources to the most innovative
              DAO&apos;s that are building social impact solutions throughout Web3
              and Public Good space.
            </Subtitle>
          </div>
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
