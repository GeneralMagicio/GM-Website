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
    <nav className="relative z-50 bg-neutral-900">
      <>
        <div className="relative z-50 mx-5 flex h-[108px] items-center justify-between md:mx-0">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-magicPurple-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-magicPurple-300" onClick={() => { setIsOpen(!isOpen) }}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex h-full flex-1 items-center justify-between sm:items-stretch">
            <div className="hidden h-full divide-x divide-neutral-800 md:flex">
              <Link href="/">
                <button className="mx-5 md:mx-10 xl:mx-24">
                  <div className="hover:drop-shadow-[0_0_35px_rgba(165,105,255,1)]">
                    <Image src={gmLogo} alt="General Magic" />
                  </div>
                </button>
              </Link>
              <div></div>
            </div>
            <div className="flex md:hidden">
              <Link href="/">
                <button className="md:mx-10 xl:mx-24">
                  <div className="hover:drop-shadow-[0_0_35px_rgba(165,105,255,1)]">
                    <Image src={gmLogo} alt="General Magic" />
                  </div>
                </button>
              </Link>
            </div>
            <div className="hidden h-full grid-cols-7 items-center justify-items-center px-10 md:grid md:gap-x-14">
              <button
                onClick={() => {
                  setScrollToServices(true)
                }}
              >
                {router.asPath === '/' ? (
                  <a className="max-w-fit text-center text-xs text-white hover:cursor-pointer hover:text-magicPurple-300 xl:text-base">
                    Services
                  </a>
                ) : (
                  <Link href="/">
                    <a className="max-w-fit text-center text-xs text-white hover:cursor-pointer hover:text-magicPurple-300 xl:text-base">
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
                        className="max-w-fit text-center text-xs text-white hover:cursor-pointer hover:text-magicPurple-300 xl:text-base"
                      >
                        {page.title}
                      </a>
                    ) : (
                      <a className="max-w-fit text-center text-xs text-white hover:cursor-pointer hover:text-magicPurple-300 xl:text-base">
                        {page.title}
                      </a>
                    )}
                  </Link>
                )
              })}
              <ProductButtonMenu isFooter={false} isNavMobile={false} isOpen={isOpen} setOpenNavMobile={setIsOpen} />
              {pages.slice(3, 5).map((page) => {
                return (
                  <Link key={page.title} href={page.url}>
                    {page.external ? (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="max-w-fit text-center text-xs text-white hover:cursor-pointer hover:text-magicPurple-300 xl:text-base"
                      >
                        {page.title}
                      </a>
                    ) : (
                      <a className="max-w-fit text-center text-xs text-white hover:cursor-pointer hover:text-magicPurple-300 xl:text-base">
                        {page.title}
                      </a>
                    )}
                  </Link>
                )
              })}
            </div>
            <Link href="/contact">
              <button className="hidden h-full items-center justify-center bg-magicPurple-300 uppercase hover:bg-magicPurple-300/70 md:flex">
                <h1 className="font-akira text-[8px] text-white md:px-5 xl:px-8 xl:text-base 2xl:px-11">
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
              <div className="flex flex-col items-center space-y-1 pt-2 pb-8 uppercase">
                <Link href="/">
                  <a
                    className="block border-transparent py-2 pl-3 pr-4 text-base font-medium text-white"
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
                    <a className="block border-transparent py-2 pl-3 pr-4 text-base font-medium uppercase text-white">
                      Services
                    </a>
                  ) : (
                    <Link href="/">
                      <a className="block border-transparent py-2 pl-3 pr-4 text-base font-medium uppercase text-white">
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
                          className="block border-transparent py-2 pl-3 pr-4 text-base font-medium text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.title}
                        </a>
                      ) : (
                        <a
                          className="block border-transparent py-2 pl-3 pr-4 text-base font-medium text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.title}
                        </a>
                      )}
                    </Link>
                  )
                })}
                <ProductButtonMenu isFooter={false} isNavMobile={true} isOpen={isOpen} setOpenNavMobile={setIsOpen} />
                {pages.slice(3, 5).map((page) => {
                  return (
                    <Link href={page.url} key={page.title}>
                      {page.external ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="block border-transparent py-2 pl-3 pr-4 text-base font-medium text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.title}
                        </a>
                      ) : (
                        <a
                          className="block border-transparent py-2 pl-3 pr-4 text-base font-medium text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {page.title}
                        </a>
                      )}
                    </Link>
                  )
                })}
                <Link href="/contact">
                  <div className="w-full px-8" onClick={() => setIsOpen(false)}>
                    <div className="w-full border-transparent bg-magicPurple-300 text-white">
                      <span className="block py-3 pl-3 pr-4 text-center font-akira text-base">
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
