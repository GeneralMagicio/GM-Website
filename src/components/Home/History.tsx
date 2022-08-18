import Image from 'next/image'

import stars from '../../../public/images/stars.png'
import { DaoGrid } from './DaoGrid'

export function History() {
  return (
    <div className="pb-16 sm:pt-20">
      <div className="divide-y divide-neutral-800">
        <div className="flex flex-col pb-16">
          <div className="flex md:pl-32 px-8">
            <DaoGrid />
          </div>
        </div>
        <div className="relative flex justify-center px-9">
          <p className="hidden text-[40px] leading-[52.8px] pt-16 lg:flex flex-col">
            <span>
              Founded by a couple folks from Giveth,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#71DDE4] via-[#71DDE4] to-[#A569FF]">
                General Magic
              </span>
            </span>
            <span>
              supports the design, development, parameterization &amp;
            </span>
            <span>communications efforts of Giveth, Commons Stack, the</span>
            <span>TEC and more so that those orgs can focus on their</span>
            <span>collective missions together.</span>
          </p>
          <p className="block lg:hidden pt-16 text-xl md:text-3xl ">
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
