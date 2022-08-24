import { Subtitle } from '../../base/Subtitle'
import { Title } from '../../base/Title'
import { OurMagiciansCard, OurMagiciansCardProps } from './Card'
import Marko from '../../../../public/images/members/MARKO.png'
import AHMAD from '../../../../public/images/members/AHMAD.png'
import FRESHELLE from '../../../../public/images/members/FRESHELLE.png'
import TOMO from '../../../../public/images/members/TOMO.png'
import MITCH from '../../../../public/images/members/MITCH.png'
import { Button } from '../../base/Button'
import Image from 'next/image'
import membersBg from '../../../../public/images/members.png'

const members: OurMagiciansCardProps[] = [
  {
    name: 'Marko',
    role: 'Design Manager / Lead',
    image: Marko,
  },
  {
    name: 'Griff',
    role: 'Co-founder',
  },
  {
    name: 'Mitch',
    role: 'DAO Technician, Governance Instigator and Technical Writer',
    image: MITCH,
  },
  {
    name: 'TOMO',
    role: 'Product Manager',
    image: TOMO,
  },
  {
    name: 'AHMAD',
    role: 'Growth & Business Development',
    image: AHMAD,
  },
  {
    name: 'FRESHELLE',
    role: 'Accounting Manager and HR Support',
    image: FRESHELLE,
  },
]

export function OurMagicians() {
  return (
    <div className="relative">
      <div className="top-[-300px] md:hidden block absolute mx-auto text-center inset-x-0 w-[250px]">
        <Image src={membersBg} alt="" />
      </div>
      <div className="mt-72 md:mt-0">
        <div className="relative mt-44 mx-12 lg:mx-32 z-50">
          <Title>
            <span>Our</span>
            <span>Magicians</span>
          </Title>
          <Subtitle paddingBottom={false} paddingTop={true}>
            <span className="lg:mr-[500px] md:mr-[300px]">
              We are a mix of noble designers, developers, system architects,
              researchers, writers and seasoned Web3 professionals, catering to
              all commons-based organisations working together to create a
              greater value for society.
            </span>
          </Subtitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 mt-6 md:mt-28">
            {members.map((member) => {
              return (
                <OurMagiciansCard
                  key={member.name}
                  name={member.name}
                  image={member.image}
                  role={member.role}
                />
              )
            })}
          </div>
          <div className="flex justify-center">
            <div className="my-6 flex items-center w-fit  hover:underline text-magicPurple-300 hover:cursor-pointer">
              <p className="uppercase mr-2">See all</p>
              <div className="">
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 4.70456C15.9934 4.53633 15.9242 4.34184 15.8088 4.21922L12.044 0.219116C11.789 -0.0101681 11.2997 -0.104706 11.0146 0.16036C10.7338 0.421485 10.7422 0.927667 11.0218 1.18977L13.6689 3.99866L0.70592 3.99866C0.31612 3.99866 0 4.31477 0 4.70458C0 5.09439 0.316107 5.4105 0.70592 5.4105L13.6689 5.4105L11.0218 8.21939C10.7809 8.46066 10.7364 8.98489 11.0146 9.2488C11.2926 9.51288 11.7993 9.42852 12.044 9.18988L15.8088 5.18978C15.9376 5.05289 16.0003 4.89221 16 4.70444V4.70456Z"
                    fill="#A569FF"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center text-center items-center">
            <Title>
              <span className="text-[32px]">Join our team</span>
            </Title>
            <Subtitle paddingBottom={true} paddingTop={true}>
              <span className="lg:px-56 sm:px-20">
                If you are different; If you have Web3 magical talent; And if
                you are restlessly passionate about public goods and effecting
                positive change. then you are a fit at General Magic!
              </span>
            </Subtitle>
            <Button
              text="Join us"
              arrowColor="#A569FF"
              bgColor="gray"
              border="linear"
              breakText={false}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute top-0 sm:top-[-300px] right-0 2xl:right-44 xl:right-20 w-[500px]">
        <Image src={membersBg} alt="" />
      </div>
    </div>
  )
}
