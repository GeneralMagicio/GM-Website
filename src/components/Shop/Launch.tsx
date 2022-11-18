import Image from 'next/image'
import { ProjectCard } from '@/components/base/Card'
import { Subtitle } from '@/components/base/Subtitle'
import { Title } from '@/components/base/Title'
import bird from 'public/images/assets/bird.svg'
import ring from 'public/images/assets/ring.svg'
import aguila from 'public/images/assets/aguila.png'

export function ShopLaunch() {
  const cards = [
    {
      title: 'Deploy by yourserlf',
      description:
        'Launch your own self service web3 swag shop with the click of a button.',
      bgColor: 'pink',
      buttonBg: 'gray',
      buttonText: 'coming soon',
    },
    {
      title: 'We build it for you',
      description:
        'Reach out to have our team launch your web3 swag shop to meet your exact specifications from A to Z.',
      bgColor: 'purple',
      buttonBg: 'purple',
      buttonText: 'Request a quote',
      url: '/contact',
    },
  ]
  return (
    <div className="relative bg-neutral-900 ">
      <div className="absolute left-0 top-0 hidden md:block">
        <Image src={bird} alt="bird" />
      </div>
      <div className="h-grid-line h-[1px]"></div>
      <div className="relative z-40 m-12 flex flex-col items-center md:my-32 lg:mx-32">
        <Title>
          <span className="text-center md:text-[32px]">
            Launch your own Swag Shop
          </span>
        </Title>
        <Subtitle paddingTop={true} paddingBottom={false}>
          <span className="max-w-2xl text-center md:text-xl">
            Having a swag shop is a great way to build loyalty in your
            community. Our job is to make that process as easy as can be.
          </span>
        </Subtitle>
      </div>
      <div className="relative my-10 grid w-full gap-y-12 dao-md:grid-cols-2">
        <div className="absolute right-0 top-[-100px] hidden dao-md:block">
          <Image src={ring} alt="ring" />
        </div>
        <div className="absolute top-[-50px] left-0 z-50 block w-32 sm:hidden">
          <Image src={aguila} alt="making magic happen" />
        </div>
        {cards.map((card) => {
          return (
            <div className="flex justify-center" key={card.title}>
              <ProjectCard
                page="Shop"
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                buttonBg={card.buttonBg}
                buttonText={card.buttonText}
                url={card.url}
              />
            </div>
          )
        })}
      </div>
      <div className="h-grid-line h-[1px]"></div>
    </div>
  )
}
