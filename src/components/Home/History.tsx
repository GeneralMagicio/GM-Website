import Image from 'next/image'

import stars from '../../../public/images/stars.png'
import { DaoGrid } from './DaoGrid'

export function History() {
  return (
    <div className="pb-16 pt-20">
      <div className="divide-y divide-neutral-800">
        <div className="flex flex-col pb-16">
          <div className="flex pl-32">
            <DaoGrid />
          </div>
        </div>
        <div className="relative flex justify-center">
          <p className="text-[40px] leading-[52.8px] pt-16 flex flex-col">
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
          <div className="absolute right-3 top-[-88px] z-20">
            <Image src={stars} alt="" width={163} height={163} />
          </div>
        </div>
      </div>
    </div>
  )
}
