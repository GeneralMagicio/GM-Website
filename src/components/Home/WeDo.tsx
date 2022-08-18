import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'

export function HomeWhatWeDo() {
  return (
    <div className="mt-44 mx-12 md:mx-56 ">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mr-24 grid grid-cols-2">
          <Title>
            <span>What</span>
            <span>we do</span>
          </Title>
          <Subtitle>
            General Magic is deploying resources to the most innovative DAO’s
            that are building social impact solutions throughout Web3 and Public
            Good space.
          </Subtitle>
        </div>
      </div>
    </div>
  )
}
