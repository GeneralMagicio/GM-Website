import Image from 'next/image'
import GM from '../../public/images/GM.svg'

const pages = [
  {
    url: '',
    label: 'Services',
  },
  {
    url: '',
    label: 'About',
  },
  {
    url: '',
    label: 'Projects',
  },
  {
    url: '',
    label: 'Careers',
  },
  {
    url: '',
    label: 'Shop',
  },
  {
    url: '',
    label: 'Contact',
  },
]
const socials = [
  {
    url: '',
    label: 'Twitter',
  },
  {
    url: '',
    label: 'Discord',
  },
  {
    url: '',
    label: 'Github',
  },
]

export function Footer() {
  return (
    <div className="h-[680px] bg-footer bg-no-repeat bg-cover md:bg-[center_bottom_-70px] md:px-32 px-12 md:py-32 py-10">
      <p className="md:hidden block text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex sm:hidden justify-center mt-8">
        <Image src={GM} alt="General Magic" width={72} height={44} />
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 mt-8 md:mt-0">
        <div className="sm:flex justify-center hidden">
          <div>
            <Image src={GM} alt="General Magic" width={72} height={44} />
          </div>
        </div>
        <div className="grid gap-y-6 h-fit justify-center">
          {pages.map((page) => {
            return <p key={page.label}>{page.label}</p>
          })}
        </div>
        <div className="grid gap-y-6 h-fit justify-center">
          {socials.map((social) => {
            return <p key={social.label}>{social.label}</p>
          })}
        </div>
        <p className="hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  )
}
