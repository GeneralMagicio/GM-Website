import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { Join } from '@/components/Join'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { OurMagiciansCard } from '@/components/OurMagicians/Card'
import { alumniMembers, members } from '@/components/OurMagicians/members'
import useReferenceContext from '@/hooks/useReference'
import membersBg from 'public/images/members.png'

interface OurMagiciansProps {
  page: string
}

export function OurMagicians({ page }: OurMagiciansProps) {
  const { memberRef, scrollToMembers, setScrollToMembers } =
    useReferenceContext()

  useEffect(() => {
    if (scrollToMembers) {
      if (null !== memberRef.current) {
        memberRef.current.scrollIntoView({ behavior: 'smooth' })
      }
      setScrollToMembers(false)
    }
  }, [])

  return (
    <div className="relative" ref={memberRef}>
      <div className="absolute inset-x-0 top-[-300px] mx-auto block w-[250px] text-center md:hidden">
        <Image src={membersBg} alt="" />
      </div>
      <div className="mt-72 md:mt-0">
        <div className="relative z-50 mt-44 px-12 md:px-20 lg:px-44 xl:px-64">
          <div
            className={classNames(
              'flex flex-col',
              page === 'Home'
                ? 'md:items-start item-center'
                : 'md:items-end items-center'
            )}
          >
            <div>
              <Title>
                {page === 'Home' ? (
                  <>
                    <span>Our</span>
                    <span>Magicians</span>
                  </>
                ) : (
                  <>
                    <span>Team</span>
                  </>
                )}
              </Title>
              <Subtitle paddingBottom={false} paddingTop={true}>
                <span className="max-w-[500px] xl:max-w-[790px]">
                  We are a mix of noble designers, developers, system
                  architects, researchers, writers and seasoned Web3
                  professionals, catering to all commons-based organisations
                  working together to create a greater value for society.
                </span>
              </Subtitle>
            </div>
          </div>
          <div
            className='mt-6 grid grid-cols-2 gap-4 pb-4 sm:pb-12 md:mt-28 md:grid-cols-3 md:gap-16'>
            {page === 'Home'
              ? members.slice(0, 6).map((member) => {
                return (
                  <OurMagiciansCard
                    key={member.name}
                    name={member.name}
                    image={member.image}
                    role={member.role}
                  />
                )
              })
              :
              members.map((member) => {
                return (
                  <OurMagiciansCard
                    key={member.name}
                    name={member.name}
                    image={member.image}
                    role={member.role}
                  />
                )
              })
            }
          </div>
          {page === 'Home' ? ('') : (
            <div
              className='grid grid-cols-2 gap-4 pb-12 md:grid-cols-3 md:gap-16 md:pb-28'>
              <h2 className='col-span-3 text-center font-akira uppercase text-magicSky-300 sm:text-[26px]'>some wizards who passed through here</h2>
              {alumniMembers.map((member) => {
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
          )}
          {page === 'Home' ? (
            <>
              <div className="flex justify-center">
                <div className="my-6 flex w-fit items-center  text-magicPurple-300 hover:cursor-pointer hover:underline">
                  <button onClick={() => setScrollToMembers(true)}>
                    <Link href="/about">
                      <div className="flex items-center">
                        <p className="mr-2 uppercase">See all</p>
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
                    </Link>
                  </button>
                </div>
              </div>
              <Join isHome={true} />
            </>
          ) : (
            ''
          )}
        </div>
      </div>
      <div
        className={classNames(
          'hidden md:block absolute top-0 sm:top-[-300px]',
          page === 'Home'
            ? 'right-0 2xl:right-44 xl:right-20 w-[500px]'
            : 'left-10 2xl:left-44 xl:left-20 w-[400px]'
        )}
      >
        <Image src={membersBg} alt="" />
      </div>
    </div>
  )
}
