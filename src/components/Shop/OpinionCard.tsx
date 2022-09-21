import Image from 'next/image'
import apos from '../../../public/images/icons/apos.svg'
import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'

export interface ShopOpinionCardProps {
  clientOrg: string
  textFirst: string
  textSecond?: string
  clientName: string
}

export function ShopOpinionCard({
  clientOrg,
  textFirst,
  textSecond,
  clientName,
}: ShopOpinionCardProps) {
  return (
    <div className="border border-misticOrange-300 p-10 max-w-[800px]">
      <Image src={apos} alt={''} />
      <Title>
        <span className="mt-2">{clientOrg}</span>
      </Title>
      <Subtitle paddingBottom={false} paddingTop={true}>
        {textFirst}
      </Subtitle>
      <Subtitle paddingBottom={true} paddingTop={true}>
        {textSecond}
      </Subtitle>
      <p className="font-bold text-2xl">{clientName}</p>
      <p>{clientOrg}</p>
    </div>
  )
}
