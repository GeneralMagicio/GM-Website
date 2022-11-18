import Image from 'next/image'
import { Button } from '@/components/base/Button'
import build from 'public/images/assets/build.png'
import useReferenceContext from '@/hooks/useReference'

export function Build() {
  const { setScrollToMembers } = useReferenceContext()
  return (
    <>
      <div className="absolute right-0 top-5 z-20">
        <Image src={build} alt="" />
      </div>
      <h1 className="relative z-50 max-w-[1200px] text-3xl font-bold text-neutral-900 md:text-6xl">
        We build digital{' '}
        <span className="text-white underline">products, governance,</span> and economic
        systems utilizing the Web3 technology.
      </h1>
      <div className="mt-16 grid gap-x-12 gap-y-4 md:w-fit md:justify-center lg:grid-cols-2">
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
