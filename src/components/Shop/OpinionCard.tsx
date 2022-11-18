import Image from 'next/image'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'
import apos from 'public/images/icons/apos.svg'

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
    <div className="max-w-[800px] border border-misticOrange-300 p-10">
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
      <p className="text-2xl font-bold">{clientName}</p>
      <p>{clientOrg}</p>
    </div>
  )
}
