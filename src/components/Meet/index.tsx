import { Subtitle } from '@/components/base/Subtitle'
import { MeetConference, MeetConferenceProps } from '@/components/Meet/Conference'

const conferences: MeetConferenceProps[] = [
  {
    title: 'ETHCC 5',
    description:
      'The Ethereum Community Conference (EthCC) is the largest annual European Ethereum event focused on technology and community. Three intense days of conferences, networking and learning.',
    city: 'Paris',
    country: 'France',
    date: 'Jul 19-21, 2022',
  },
  {
    title: 'ETH Berlin',
    description:
      'ETHBerlin³ is a hackathon, a cultural festival, an educational event, a platform for hacktivism, and a community initiative to push the decentralized ecosystem forward.',
    city: 'Berlin',
    country: 'Germany',
    date: 'Sep 16-18, 2022',
  },
  {
    title: 'DEVCON BOGOTA',
    description:
      'Devcon is an intensive introduction for new Ethereum explorers, a global family reunion for those already a part of our ecosystem, and a source of energy and creativity for all.',
    city: 'Bogota',
    country: 'Colombia',
    date: 'Oct 11-14, 2022',
  },
]

export function MeetConferences() {
  return (
    <div className="bg-black">
      <div className="h-grid-line h-[1px]"></div>
      <div className="px-12  md:px-20 lg:px-44 xl:px-64 my-16">
        <div className="pb-1 flex flex-col w-fit text-xl md:text-[32px] font-akira bg-clip-text text-transparent bg-gradient-to-r from-[#A569FF] via-[#A569FF] to-[#71DDE4]">
          <span>Meet us at</span>
          <span>Conferences</span>
        </div>
        <Subtitle paddingBottom={true} paddingTop={true}>
          We frequent the conference circuit and would love to meet up if
          you&apos;re attending any of the events below.
        </Subtitle>
        <div className="grid gap-y-8 md:gap-y-[72px] md:mb-16">
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
