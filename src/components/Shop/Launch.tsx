import { ProjectCard } from '../base/Card'
import { Subtitle } from '../base/Subtitle'
import { Title } from '../base/Title'
import bird from '../../../public/images/bird.svg'
import ring from '../../../public/images/ring.svg'
import Image from 'next/image'

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
    <div className="bg-neutral-900 relative ">
      <div className="absolute left-0 top-0">
        <Image src={bird} alt="bird" />
      </div>
      <div className="h-grid-line h-[1px]"></div>
      <div className="relative z-40 flex flex-col items-center mx-12 lg:mx-32 my-32">
        <Title>
          <span className="text-center md:text-[32px]">
            Launch your own Swag Shop
          </span>
        </Title>
        <Subtitle paddingTop={true} paddingBottom={false}>
          <span className="text-center md:text-xl max-w-2xl">
            Having a swag shop is a great way to build loyalty in your
            community. Our job is to make that process as easy as can be.
          </span>
        </Subtitle>
      </div>
      <div className="grid grid-cols-2 w-full my-10 relative">
        <div className="absolute right-0 top-[-100px]">
          <Image src={ring} alt="ring" />
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
