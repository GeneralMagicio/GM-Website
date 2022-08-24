import { Subtitle } from '../../base/Subtitle'
import { Title } from '../../base/Title'
import { WeDoCard, WeDoCardProps } from './Card'

export function HomeWhatWeDo() {
  const cards: WeDoCardProps[] = [
    {
      title: 'Dao',
      description:
        'We invest in DAOs such as Giveth, Commons Stack, TEC and more, and actively participate in their governance.',
    },
    {
      title: 'r&d',
      description:
        'Our robust R&D team is developing groundbreaking technologies and making ongoing contributions to the Ethereum Ecosystem.',
    },
    {
      title: 'education',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]
  return (
    <div className="mt-20 md:mt-44 mx-12 lg:mx-32 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="grid md:grid-cols-2 gap-x-12 md:gap-y-[88px] gap-y-8">
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
