import Image from 'next/image'
import Link from 'next/link'
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
    url: '/projects',
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
    url: '/contact',
    label: 'Contact',
  },
]
const socials = [
  {
    url: 'https://twitter.com/generalmagicio',
    label: 'Twitter',
  },
  {
    url: 'https://discord.gg/72HUmabwEs',
    label: 'Discord',
  },
  {
    url: 'https://github.com/GeneralMagicio/',
    label: 'Github',
  },
  {
    url: 'https://medium.com/@generalmagic',
    label: 'Medium',
  },
  {
    url: 'https://www.linkedin.com/company/generalmagicio/',
    label: 'Linkedin',
  },
]

export function Footer() {
  return (
    <div className="h-[680px] bg-footer bg-no-repeat bg-cover md:bg-[center_bottom_-70px] md:px-32 px-12 md:py-32 py-10">
      <div className="flex sm:hidden justify-center mt-8">
        <Link href="/">
          <Image src={GM} alt="General Magic" width={72} height={44} />
        </Link>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 mt-8 md:mt-0">
        <div className="sm:flex justify-center hidden col-span-2 md:col-span-1">
          <Link href="/">
            <div className="hover:cursor-pointer">
              <Image src={GM} alt="General Magic" width={72} height={44} />
            </div>
          </Link>
        </div>
        <div className="grid gap-y-6 h-fit justify-center">
          {pages.map((page) => {
            return (
              <Link key={page.label} href={page.url}>
                <p className="hover:text-magicPurple-300 hover:cursor-pointer hover:underline">
                  {page.label}
                </p>
              </Link>
            )
          })}
        </div>
        <div className="grid gap-y-6 h-fit justify-center">
          {socials.map((social) => {
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-magicPurple-300 hover:underline"
              >
                {social.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
