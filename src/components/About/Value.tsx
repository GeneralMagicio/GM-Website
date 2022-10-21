import Image, { StaticImageData } from 'next/image'
import classnames from 'classnames'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'

export interface AboutValueProps {
  titleFirst: string
  titleSecond: string
  titleThird?: string
  description: string
  image: StaticImageData | string
  imageAlt: string
  componentPosition: string
}

export function AboutValue({
  titleFirst,
  titleSecond,
  titleThird,
  description,
  image,
  componentPosition,
}: AboutValueProps) {
  const componentPositions: { [key: string]: { [key: string]: string } } = {
    right: { position: 'md:flex-row-reverse', margin: 'md:pr-6' },
    left: { position: 'md:flex-row', margin: 'md:pl-6' },
  }
  const side = componentPositions[componentPosition]
  return (
    <div
      className={classnames(
        'flex flex-col-reverse items-center justify-center md:px-28 px-12 mt-16 relative z-40',
        side['position']
      )}
    >
      <div className="max-w-[650px] mt-5 md:mt-0">
        <div className="flex justify-center md:justify-start">
          <Title>
            <span className="text-center md:text-start">{titleFirst}</span>
            <span className="text-center md:text-start">{titleSecond}</span>
            {titleThird && (
              <span className="text-center md:text-start">{titleThird}</span>
            )}
          </Title>
        </div>
        <Subtitle paddingBottom={false} paddingTop={true}>
          <span className="text-center md:text-left">{description}</span>
        </Subtitle>
      </div>
      <div
        className={classnames(
          'md:w-fit md:min-w-[350px] max-w-[250px] min-w-[200px]',
          side['margin']
        )}
      >
        <Image src={image} alt="" />
      </div>
    </div>
  )
}
