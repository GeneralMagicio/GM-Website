import { Swiper, SwiperSlide } from 'swiper/react'
import { ProjectCard } from '../base/Card'
import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'

import 'swiper/css'
import { SwiperButtonNext } from './SwipperNextButton'
import { useEffect, useState } from 'react'
import { SwiperButtonPrev } from './SwipperPrevButton'
import useWindowDimensions from '../../hooks/useWindowsDimensions'

export function Magic() {
  const [swiperIstance, setSwiperInstance] = useState({})
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [swiperPerPage, setSwiperPerPage] = useState(2.3)
  const { width } = useWindowDimensions()

  function handleSwiper(swiper: any) {
    console.log(swiper.realIndex)
    swiper.isBeginning ? setIsBeginning(true) : setIsBeginning(false)
    swiper.isEnd ? setIsEnd(true) : setIsEnd(false)
  }
  useEffect(() => {
    if (width) {
      width > 768 ? setSwiperPerPage(2.3) : setSwiperPerPage(1.3)
    }
  }, [width])

  const projects = [
    {
      title: 'Token Economics',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bgColor: 'blue',
    },
    {
      title: 'DAO Tooling and DESIGN',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bgColor: 'orange',
    },
    {
      title: 'DAO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bgColor: 'pink',
    },
  ]
  return (
    <>
      <div className="mt-20 md:mt-44 mx-12 lg:ml-32 lg:mr-52 md:mx-16">
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
              talents that can handle almost any task needed.
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
        slidesPerView={swiperPerPage}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onRealIndexChange={(swiper) => handleSwiper(swiper)}
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.title}>
              <div className="flex justify-center mt-20 md:ml-20 ml-8">
                <ProjectCard
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
