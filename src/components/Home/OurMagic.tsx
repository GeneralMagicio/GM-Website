import { ProjectCard } from '../base/Card'
import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'

export function Magic() {
  return (
    <>
      <div className="mt-44 mx-12 md:mx-56 ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mr-24">
            <Title>
              <span>Our</span>
              <span>Magic</span>
            </Title>
            <Subtitle>Services</Subtitle>
          </div>
          <div>
            <p className="md:pr-28 text-2xl">
              General Magic solves the needs of Public Good projects by
              assigning top-notch Web3 professionals to assist them in their
              goals, either by integrating with existing teams, or creating
              resources from scratch. We have a diverse range of web3-related
              talents that can handle almost any task needed.
            </p>
          </div>
        </div>
      </div>
      <div className="md:ml-32 mt-24 grid lg:grid-cols-2 justify-center gap-10">
        <ProjectCard
          title="Token Economics"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          bgColor="blue"
        />
        <ProjectCard
          title="DAO Tooling and DESIGN"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          bgColor="orange"
        />
      </div>
    </>
  )
}
