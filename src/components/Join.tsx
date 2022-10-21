import { Button } from '@/components/base/Button'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'

export function Join() {
  return (
    <div className="flex flex-col justify-center text-center items-center sm:px-8">
      <Title>
        <span className="text-[32px]">Join our team</span>
      </Title>
      <Subtitle paddingBottom={true} paddingTop={true}>
        <span className="lg:px-56 sm:px-20 py-8">
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
