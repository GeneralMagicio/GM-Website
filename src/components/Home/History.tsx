import Image from 'next/image'

import { Button } from '@/components/base/Button'
import { DaoGrid } from '@/components/Home/DaoGrid'
import stars from 'public/images/stars.png'

export function History() {
  return (
    <div className="pb-16 sm:pt-20">
      <div className="divide-y divide-neutral-800">
        <div className="flex flex-col px-12 pb-8 md:pl-32">
          <DaoGrid />
          <div className="py-8">
            <Button
              url="/contact"
              arrowColor="#ffff"
              bgColor="orange"
              text="Work with us"
              breakText={true}
              externalLink={false}
            />
          </div>
        </div>
        <div className="relative flex justify-center px-12 md:px-20 lg:px-44 xl:px-64">
          <p className="pt-16 text-xl md:text-3xl lg:leading-[52px] xl:text-[40px]">
            Founded by a couple of folks from Giveth in 2020,
            <span className="bg-gradient-to-r from-[#71DDE4] via-[#71DDE4] to-[#A569FF] bg-clip-text text-transparent">
              {' '}
              General Magic{' '}
            </span>
            supports the design, development, parameterization &amp;
            communications efforts of impact DAO&apos;s ranging from Giveth,
            Commons Stack, the TEC, and more so that those orgs can focus on
            their collective missions together.
          </p>
          <div className="absolute right-3 top-[-88px] z-20">
            <Image src={stars} alt="" width={163} height={163} />
          </div>
        </div>
      </div>
    </div>
  )
}
