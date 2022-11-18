import { Button } from '@/components/base/Button'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'
import classNames from 'classnames'

interface IJoin {
  isHome: boolean
}

export function Join({ isHome }: IJoin) {
  return (
    <div className={classNames("flex flex-col justify-center text-center items-center", isHome ? "sm:px-8" : "px-8")}>
      <Title>
        <span className="text-[32px]">Join our team</span>
      </Title>
      <Subtitle paddingBottom={true} paddingTop={true}>
        <span className="py-8 sm:px-20 lg:px-56">
          If you are different; If you have Web3 magical talent; And if you are
          restlessly passionate about public goods and effecting positive
          change. then you are a fit at General Magic!
        </span>
      </Subtitle>
      <Button
        url="https://giveth.recruitee.com/"
        text="Join us"
        arrowColor="#A569FF"
        bgColor="gray"
        border="linear"
        breakText={false}
        externalLink={true}
      />
    </div>
  )
}
