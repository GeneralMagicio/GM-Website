import Image from 'next/image'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'
import apos from 'public/images/icons/apos.svg'
import classNames from 'classnames'

export interface OpinionCardProps {
  clientOrg: string
  textFirst: string
  textSecond?: string
  clientName: string
  shop: boolean
}

export function OpinionCard({
  clientOrg,
  textFirst,
  textSecond,
  clientName,
  shop
}: OpinionCardProps) {
  return (
    <div className={
      classNames("border border-misticOrange-300 p-10",
        shop ? 'max-w-[800px]' : 'w-full bg-[#121213] opacity-95'
      )}>
      <Image src={apos} alt={''} />
      {shop &&
        <Title>
          <span className="mt-2">{clientOrg}</span>
        </Title>
      }
      <Subtitle paddingBottom={false} paddingTop={shop ? true : false}>
        <span className={classNames(!shop ? 'py-6' : '')}>
          {textFirst}
        </span>
      </Subtitle>
      {
        textSecond &&
        <Subtitle paddingBottom={true} paddingTop={true}>
          {textSecond}
        </Subtitle>
      }
      <p className="text-2xl font-bold">{clientName}</p>
      <p>{clientOrg}</p>
    </div >
  )
}
