import Image from 'next/image'
import { Button } from '../base/Button'
import build from '../../../public/images/build.png'

export function Build() {
  return (
    <>
      <div className="absolute right-0 top-5 z-20">
        <Image src={build} alt="" />
      </div>
      <h1 className="text-3xl md:text-6xl font-bold text-neutral-900 relative z-50">
        We build digital{' '}
        <span className="underline">products, governance,</span> and economic
        systems utilizing the Web3 technology.
      </h1>
      <div className="grid md:grid-cols-2 gap-x-12 mt-16 justify-center gap-y-4 md:w-fit">
        <div>
          <Button
            text="explore projects"
            arrowColor="#A569FF"
            bgColor="gray"
            border="linear"
          />
        </div>
        <div>
          <Button
            text="meet our team"
            arrowColor="#A569FF"
            bgColor="gray"
            border="linear"
          />
        </div>
      </div>
    </>
  )
}
