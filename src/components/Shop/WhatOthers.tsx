import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'

export function ShopWhatOthers() {
  return (
    <div className="bg-homeBg bg-cover bg-center bg-no-repeat bg-blend-darken bg-neutral-900 md:pb-24 pb-16 flex flex-col items-center justify-center pt-28">
      <Title>
        <span className="text-center md:text-[32px] max-w-2xl leading-10">
          What other say
        </span>
      </Title>
      <Subtitle paddingTop={true} paddingBottom={true}>
        <span className="text-center md:text-xl max-w-2xl">
          Don&apos;t just take our word for it. See what other DAO&apos;s say
          about our swag shop service.
        </span>
      </Subtitle>
    </div>
  )
}
