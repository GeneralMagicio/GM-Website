import Image from 'next/image'

import stars from '../../../public/images/stars.png'
import { Button } from '../base/Button'
import { DaoGrid } from './DaoGrid'

export function History() {
  return (
    <div className="pb-16 sm:pt-20">
      <div className="divide-y divide-neutral-800">
        <div className="flex flex-col md:pl-32 px-12 pb-8">
          <DaoGrid />
          <div className="py-8">
            <Button
              arrowColor="#ffff"
              bgColor="orange"
              text="Work with us"
              breakText={true}
            />
          </div>
        </div>
        <div className="relative flex justify-center px-12 lg:px-32">
          <p className="pt-16 text-xl md:text-3xl xl:text-[40px]">
            Founded by a couple folks from Giveth,
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#71DDE4] via-[#71DDE4] to-[#A569FF]">
              {' '}
              General Magic{' '}
            </span>
            supports the design, development, parameterization &amp;
            communications efforts of Giveth, Commons Stack, the TEC and more so
            that those orgs can focus on their collective missions together.
          </p>
          <div className="absolute right-3 top-[-88px] z-20">
            <Image src={stars} alt="" width={163} height={163} />
          </div>
        </div>
      </div>
    </div>
  )
}
