import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Disclosure, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { pages } from '@/components/pages'
import gmLogo from 'public/images/logo/gmLogo.svg'
import useReferenceContext from '@/hooks/useReference'
import { ProductButtonMenu } from './base/ProductButton'

export function Navbar() {
  const { setScrollToServices } = useReferenceContext()
  const router = useRouter()
  return (
    <Disclosure as="nav" className="bg-neutral-900 z-50 relative">
      {({ open }) => (
        <>
          <div className="flex items-center h-[108px] justify-between z-50 relative mx-5 md:mx-0">
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-magicPurple-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-magicPurple-300">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
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
              <div className="hidden md:grid grid-cols-7 h-full items-center md:gap-x-14 px-10">
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
                <ProductButtonMenu />
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
          <Transition
            enter="transition duration-100 ease-out duration-1000"
            enterFrom="transform scale-95 opacity-0 duration-1000"
            enterTo="transform scale-100 opacity-100 duration-1000"
            leave="transition duration-75 ease-out duration-500"
            leaveFrom="transform scale-100 opacity-100 duration-150"
            leaveTo="transform scale-95 opacity-0 duration-150"
          >
            <Disclosure.Panel className="md:hidden">
              {({ close }) => (
                <div className="pt-2 pb-8 space-y-1 uppercase flex flex-col items-center">
                  <Link href="/">
                    <a
                      className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 block pl-3 pr-4 py-2 text-base font-medium"
                      onClick={() => close()}
                    >
                      Home
                    </a>
                  </Link>
                  <button
                    onClick={() => {
                      setScrollToServices(true)
                      close()
                    }}
                  >
                    {router.asPath === '/' ? (
                      <a className="uppercase border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 block pl-3 pr-4 py-2 text-base font-medium">
                        Services
                      </a>
                    ) : (
                      <Link href="/">
                        <a className="uppercase border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 block pl-3 pr-4 py-2 text-base font-medium">
                          Services
                        </a>
                      </Link>
                    )}
                  </button>
                  {pages.map((page) => {
                    return (
                      <Link href={page.url} key={page.title}>
                        {page.external ? (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 block pl-3 pr-4 py-2 text-base font-medium"
                            onClick={() => close()}
                          >
                            {page.title}
                          </a>
                        ) : (
                          <a
                            className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 block pl-3 pr-4 py-2 text-base font-medium"
                            onClick={() => close()}
                          >
                            {page.title}
                          </a>
                        )}
                      </Link>
                    )
                  })}
                  <Link href="/contact">
                    <div className="px-8 w-full" onClick={() => close()}>
                      <div className="text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 border-transparent bg-magicPurple-300 w-full">
                        <span className="font-akira block pl-3 pr-4 py-3 text-base text-center">
                          Work with us
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
