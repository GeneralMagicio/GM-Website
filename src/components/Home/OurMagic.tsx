import 'swiper/css'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ProjectCard } from '@/components/base/Card'
import { Title } from '@/components/base/Title'
import { Subtitle } from '@/components/base/Subtitle'
import { SwiperButtonNext } from '@/components/Home/SwipperNextButton'
import { SwiperButtonPrev } from '@/components/Home/SwipperPrevButton'
import useReferenceContext from '@/hooks/useReference'

export function Magic() {
  const [swiperIstance, setSwiperInstance] = useState({})
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const { serviceRef, scrollToServices, setScrollToServices } =
    useReferenceContext()

  useEffect(() => {
    if (scrollToServices) {
      if (null !== serviceRef.current) {
        serviceRef.current.scrollIntoView({ behavior: 'smooth' })
      }
      setScrollToServices(false)
    }
  }, [serviceRef, scrollToServices, setScrollToServices])

  function handleSwiper(swiper: any) {
    swiper.isBeginning ? setIsBeginning(true) : setIsBeginning(false)
    swiper.isEnd ? setIsEnd(true) : setIsEnd(false)
  }

  const projects = [
    {
      title: 'Token Economics',
      description: `Whether you're thinking of launching an NFT project, a social or governance token or a full token economy, we have the expertise to make it happen.`,
      bgColor: 'blue',
    },
    {
      title: 'DAO Tooling and DESIGN',
      description:
        'Working on the cutting edge of DAO tooling and Tokenomics, our deep knowledge of the ecosystem will help you design your organization based on your needs.',
      bgColor: 'orange',
    },
    {
      title: 'Full stack development',
      description: `Our world class dev team can build any app from the ground up. We cover everything from databases, backend systems, API's, Frontend UI's, Smart Contracts and Fullstack apps.`,
      bgColor: 'pink',
    },
    {
      title: 'user research and ux design',
      description: `We know the importance of a great user experience. Our world class design team can help you craft streamlined user journeys that delight.`,
      bgColor: 'purple',
    },
    {
      title: 'product design',
      description: `From ideation to prototyping, our team can design your product from the ground up and make it ready to go-to-market. We also offer a revenue share partnership model to get your project off the ground.`,
      bgColor: 'blue',
    },
    {
      title: 'branding',
      description: `With our strong Design and UX team, we can help you brand stand out from the crowd and with a distinct identity.`,
      bgColor: 'orange',
    },
    {
      title: 'copywriting',
      description: `We know the words that are needed to make your content stand out. From web3 marketing to DAO proposals & technical writing.`,
      bgColor: 'pink',
    },
    {
      title: 'hr & hiring',
      description: `Through our expansive web3 network, we can help you find the talent you need and offer solutions on best practices for a globally decentralized team.`,
      bgColor: 'purple',
    },
  ]
  return (
    <>
      <div
        className="mt-20 md:mt-44 mx-12 lg:ml-32 lg:mr-52 md:mx-16"
        ref={serviceRef}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="mr-24">
            <Title>
              <span>Our</span>
              <span>Magic</span>
            </Title>
            <Subtitle paddingBottom={false} paddingTop={true}>
              Services
            </Subtitle>
            <div className="hidden md:block mt-4">
              <SwiperButtonPrev
                swiper={swiperIstance}
                isBeginning={isBeginning}
              />
              <SwiperButtonNext swiper={swiperIstance} isEnd={isEnd} />
            </div>
          </div>
          <div>
            <p className="text-sm md:text-2xl mt-2">
              General Magic solves the needs of Public Good projects by
              assigning top-notch Web3 professionals to assist them in their
              goals, either by integrating with existing teams, or creating
              resources from scratch. We have a diverse range of web3-related
              talents that can handle virtually any task.
            </p>
          </div>
          <div className="md:hidden block mt-4">
            <SwiperButtonPrev
              swiper={swiperIstance}
              isBeginning={isBeginning}
            />
            <SwiperButtonNext swiper={swiperIstance} isEnd={isEnd} />
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onRealIndexChange={(swiper) => handleSwiper(swiper)}
        breakpoints={{
          550: {
            slidesPerView: 1,
          },
          700:{
            slidesPerView: 2,
          },
          1023: {
            slidesPerView: 1.5,
          },
          1324: {
            slidesPerView: 2.3,
          },
          2000: {
            slidesPerView: 3,
          },
        }}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.title}>
              <div className="flex justify-center mt-20">
                <ProjectCard
                  page="Home"
                  title={project.title}
                  description={project.description}
                  bgColor={project.bgColor}
                />
              </div>
            </SwiperSlide>
          )
        })}
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  )
}