import { Subtitle } from '../../base/Subtitle'
import { MeetConference, MeetConfereProps } from './Conference'

const conferences: MeetConfereProps[] = [
  {
    title: 'Conferece Title 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    city: 'City',
    country: 'Country',
    date: 'mm/dd/yyyy',
  },
  {
    title: 'Conferece Title 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    city: 'City',
    country: 'Country',
    date: 'mm/dd/yyyy',
  },
  {
    title: 'Conferece Title 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    city: 'City',
    country: 'Country',
    date: 'mm/dd/yyyy',
  },
]

export function HomeMeet() {
  return (
    <div className="bg-black">
      <div className="h-grid-line h-[1px]"></div>
      <div className="mx-12 lg:mx-32 my-16">
        <div className="pb-1 flex flex-col w-fit text-xl md:text-[32px] font-akira bg-clip-text text-transparent bg-gradient-to-r from-[#A569FF] via-[#A569FF] to-[#71DDE4]">
          <span>Meet us at</span>
          <span>Conferences</span>
        </div>
        <Subtitle paddingBottom={true} paddingTop={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Subtitle>
        <div className="grid gap-y-8 md:gap-y-[72px] md:my-16">
          {conferences.map((conference) => {
            return (
              <MeetConference
                key={conference.title}
                title={conference.title}
                description={conference.description}
                city={conference.city}
                country={conference.country}
                date={conference.date}
              />
            )
          })}
        </div>
      </div>
      <div className="h-grid-line h-[1px]"></div>
    </div>
  )
}
