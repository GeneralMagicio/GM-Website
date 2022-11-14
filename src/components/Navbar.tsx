import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { pages } from '@/components/pages'
import gmLogo from 'public/images/logo/gmLogo.svg'
import useReferenceContext from '@/hooks/useReference'
import { ProductButtonMenu } from './base/ProductButton'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { Transition } from '@headlessui/react'

export function Navbar() {
  const { setScrollToServices } = useReferenceContext()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()

  return (
    <nav className="bg-neutral-900 z-50 relative">
      <>
        <div className="flex items-center h-[108px] justify-between z-50 relative mx-5 md:mx-0">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-magicPurple-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-magicPurple-300" onClick={() => { setIsOpen(!isOpen) }}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="h-full flex-1 flex items-center sm:items-stretch justify-between">
            <div className="hidden md:flex divide-x divide-neutral-800 h-full">
              <Link href="/">
                <button className="xl:mx-24 md:mx-10 mx-5">
                  <div className="hover:drop-shadow-[0_0_35px_rgba(165,105,255,1)]">
                    <Image src={gmLogo} alt="General Magic" />
                  </div>
                </button>
              </Link>
              <div></div>
            </div>
            <div className="flex md:hidden">
              <Link href="/">
                <button className="xl:mx-24 md:mx-10">
                  <div className="hover:drop-shadow-[0_0_35px_rgba(165,105,255,1)]">
                    <Image src={gmLogo} alt="General Magic" />
                  </div>
                </button>
              </Link>
            </div>
            <div className="hidden md:grid grid-cols-7 h-full items-center md:gap-x-14 px-10 justify-items-center">
              <button
                onClick={() => {
                  setScrollToServices(true)
                }}
              >
                {router.asPath === '/' ? (
                  <a className="text-white hover:text-magicPurple-300 text-center text-xs xl:text-base max-w-fit hover:cursor-pointer">
                    Services
                  </a>
                ) : (
                  <Link href="/">
                    <a className="text-white hover:text-magicPurple-300 text-center text-xs xl:text-base max-w-fit hover:cursor-pointer">
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
                        className="text-white hover:text-magicPurple-300 text-center text-xs xl:text-base max-w-fit hover:cursor-pointer"
                      >
                        {page.title}
                      </a>
                    ) : (
                      <a className="text-white hover:text-magicPurple-300 text-center text-xs xl:text-base max-w-fit hover:cursor-pointer">
                        {page.title}
                      </a>
                    )}
                  </Link>
                )
              })}
              <ProductButtonMenu isFooter={false} isNavMobile={false} setOpenNavMobile={setIsOpen} />
              {pages.slice(3, 5).map((page) => {
                return (
                  <Link key={page.title} href={page.url}>
                    {page.external ? (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="text-white hover:text-magicPurple-300 text-center text-xs xl:text-base max-w-fit hover:cursor-pointer"
                      >
                        {page.title}
                      </a>
                    ) : (
                      <a className="text-white hover:text-magicPurple-300 text-center text-xs xl:text-base max-w-fit hover:cursor-pointer">
                        {page.title}
                      </a>
                    )}
                  </Link>
                )
              })}
            </div>
            <Link href="/contact">
              <button className="hidden uppercase bg-magicPurple-300 h-full md:flex items-center hover:bg-opacity-70 justify-center">
                <h1 className="text-white font-akira 2xl:px-11 xl:px-8 md:px-5 xl:text-base text-[8px]">
                  work with us
                </h1>
              </button>
            </Link>
          </div>
        </div>
        {
          <Transition
            show={isOpen}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <div className="md:hidden">
              <div className="pt-2 pb-8 space-y-1 uppercase flex flex-col items-center">
                <Link href="/">
                  <a
                    className="border-transparent text-white block pl-3 pr-4 py-2 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                </Link>
                <button
                  onClick={() => {
                    setScrollToServices(true)
                    setIsOpen(false)
                  }}
                >
                  {router.asPath === '/' ? (
                    <a className="uppercase border-transparent text-white block pl-3 pr-4 py-2 text-base font-medium">
                      Services
                    </a>
                  ) : (
                    <Link href="/">
                      <a className="uppercase border-transparent text-white block pl-3 pr-4 py-2 text-base font-medium">
                        Services
                      </a>
                    </Link>
                  )}
                </button>
                {pages.slice(0, 3).map((page) => {
                  return (
                    <Link href={page.url} key={page.title}>
                      {page.external ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="border-transparent text-white block pl-3 pr-4 py-2 text-base font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.title}
                        </a>
                      ) : (
                        <a
                          className="border-transparent text-white block pl-3 pr-4 py-2 text-base font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.title}
                        </a>
                      )}
                    </Link>
                  )
                })}
                <ProductButtonMenu isFooter={false} isNavMobile={true} setOpenNavMobile={setIsOpen} />
                {pages.slice(3, 5).map((page) => {
                  return (
                    <Link href={page.url} key={page.title}>
                      {page.external ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="border-transparent text-white block pl-3 pr-4 py-2 text-base font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.title}
                        </a>
                      ) : (
                        <a
                          className="border-transparent text-white block pl-3 pr-4 py-2 text-base font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.title}
                        </a>
                      )}
                    </Link>
                  )
                })}
                <Link href="/contact">
                  <div className="px-8 w-full" onClick={() => setIsOpen(false)}>
                    <div className="text-white border-transparent bg-magicPurple-300 w-full">
                      <span className="font-akira block pl-3 pr-4 py-3 text-base text-center">
                        Work with us
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Transition>
        }
      </>
    </nav>
  )
}
