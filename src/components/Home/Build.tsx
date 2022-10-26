import Image from 'next/image'
import { Button } from '@/components/base/Button'
import build from 'public/images/build.png'
import useReferenceContext from '@/hooks/useReference'

export function Build() {
  const { setScrollToMembers } = useReferenceContext()
  return (
    <>
      <div className="absolute right-0 top-5 z-20">
        <Image src={build} alt="" />
      </div>
      <h1 className="text-3xl md:text-6xl font-bold text-neutral-900 relative z-50 max-w-[1200px]">
        We build digital{' '}
        <span className="underline text-white">products, governance,</span> and economic
        systems utilizing the Web3 technology.
      </h1>
      <div className="grid lg:grid-cols-2 gap-x-12 mt-16 md:justify-center gap-y-4 md:w-fit">
        <div>
          <Button
            url="/projects"
            text="explore projects"
            arrowColor="#A569FF"
            bgColor="gray"
            border="linear"
            breakText={true}
            externalLink={false}
          />
        </div>
        <div
          onClick={() => {
            setScrollToMembers(true)
          }}
        >
          <Button
            url="/about"
            text="meet our team"
            arrowColor="#A569FF"
            bgColor="gray"
            border="linear"
            breakText={true}
            externalLink={false}
          />
        </div>
      </div>
    </>
  )
}
