import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { pages } from '@/components/pages'
import useReferenceContext from '@/hooks/useReference'
import GM from 'public/images/GM.svg'
import { ProductButtonMenu } from './base/ProductButton'
import { useState } from 'react'

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
    url: 'https://www.linkedin.com/company/generalmagicio/',
    label: 'Linkedin',
  },
]

export function Footer() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { setScrollToServices } = useReferenceContext()
  const router = useRouter()
  return (
    <div className="h-[680px] bg-footer bg-cover bg-no-repeat px-12 py-10 md:bg-[center_bottom_-70px] md:p-32">
      <div className="mt-8 flex justify-center sm:hidden">
        <Link href="/">
          <div className="hover:cursor-pointer">
            <Image src={GM} alt="General Magic" width={72} height={44} />
          </div>
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-2 md:mt-0 md:grid-cols-3">
        <div className="col-span-2 hidden justify-center sm:flex md:col-span-1">
          <Link href="/">
            <div className="hover:cursor-pointer">
              <Image src={GM} alt="General Magic" width={72} height={44} />
            </div>
          </Link>
        </div>
        <div className="grid h-fit justify-center gap-y-6">
          <button
            className="flex"
            onClick={() => {
              setScrollToServices(true)
            }}
          >
            {router.asPath === '/' ? (
              <a className="hover:cursor-pointer hover:text-magicPurple-300 hover:underline">
                Services
              </a>
            ) : (
              <Link href="/">
                <a className="hover:cursor-pointer hover:text-magicPurple-300 hover:underline">
                  Services
                </a>
              </Link>
            )}
          </button>
          {pages.slice(0, 3).map((page) => {
            return (
              <Link key={page.title} href={page.url}>
                {page.external ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="hover:cursor-pointer hover:text-magicPurple-300 hover:underline"
                  >
                    {page.title}
                    <span className="ml-1">↗</span>
                  </a>
                ) : (
                  <a className="hover:cursor-pointer hover:text-magicPurple-300 hover:underline">
                    {page.title}
                  </a>
                )}
              </Link>
            )
          })}
          <ProductButtonMenu
            isFooter={true}
            isNavMobile={false}
            setOpenNavMobile={setIsOpen}
          />
          {pages.slice(3, 5).map((page) => {
            return (
              <Link key={page.title} href={page.url}>
                {page.external ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="hover:cursor-pointer hover:text-magicPurple-300 hover:underline"
                  >
                    {page.title}
                    <span className="ml-1">↗</span>
                  </a>
                ) : (
                  <a className="hover:cursor-pointer hover:text-magicPurple-300 hover:underline">
                    {page.title}
                  </a>
                )}
              </Link>
            )
          })}
        </div>
        <div className="grid h-fit justify-center gap-y-6">
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
                <span className="ml-1">↗</span>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
