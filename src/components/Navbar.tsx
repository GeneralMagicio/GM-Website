import Image from 'next/image'
import gmLogo from '../../public/images/gmLogo.svg'

export function Navbar() {
  const pages = [
    {
      title: 'Services',
      url: '',
    },
    {
      title: 'About',
      url: '',
    },
    {
      title: 'Projects',
      url: '',
    },
    {
      title: 'Careers',
      url: '',
    },
    {
      title: 'Shop',
      url: '',
    },
    {
      title: 'Contact',
      url: '',
    },
  ]
  return (
    <div className="flex items-center h-[108px] justify-between z-50 relative">
      <div className="flex divide-x divide-neutral-800 h-full">
        <button className="xl:mx-24 md:mx-10">
          <div className="hover:drop-shadow-[0_0_35px_rgba(165,105,255,1)]">
            <Image src={gmLogo} alt="General Magic" />
          </div>
        </button>
        <div></div>
      </div>
      <div className="grid grid-cols-6 h-full items-center gap-x-14 px-5">
        {pages.map((page) => {
          return (
            <button
              key={page.title}
              className="text-white hover:text-magicPurple-300 text-center max-w-fit"
            >
              {page.title}
            </button>
          )
        })}
      </div>
      <button className="uppercase bg-magicPurple-300 h-full flex items-center hover:bg-opacity-50">
        <h1 className="text-white font-akira xl:px-11 lg:px-8 md:px-3 lg:text-base text-[8px]">
          work with us
        </h1>
      </button>
    </div>
  )
}
