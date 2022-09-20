import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import gmLogo from '../../public/images/logo/gmLogo.svg'
import { AnimatePresence, motion } from 'framer-motion'

export function Navbar() {
  const pages = [
    // {
    //   title: 'Services',
    //   url: '',
    // },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Careers',
      url: '',
    },
    {
      title: 'Shop',
      url: '/shop',
    },
    {
      title: 'Contact',
      url: '/contact',
    },
  ]

  return (
    <Disclosure as="nav" className="bg-neutral-900 z-50 relative">
      {({ open }) => (
        <>
          <div className="flex items-center h-[108px] justify-between z-50 relative mx-5 md:mx-0">
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-magicPurple-300 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-magicPurple-300">
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
              {/* <div className="hidden md:grid grid-cols-6 h-full items-center md:gap-x-14 px-10"> */}

              <div className="hidden md:grid grid-cols-5 h-full items-center md:gap-x-14 px-10">
                {pages.map((page) => {
                  return (
                    <Link key={page.title} href={page.url}>
                      <p className="text-white hover:text-magicPurple-300 text-center text-xs xl:text-base max-w-fit hover:cursor-pointer">
                        {page.title}
                      </p>
                    </Link>
                  )
                })}
              </div>
              <button className="hidden uppercase bg-magicPurple-300 h-full md:flex items-center hover:bg-opacity-70 justify-center">
                <h1 className="text-white font-akira 2xl:px-11 xl:px-8 md:px-5 xl:text-base text-[8px]">
                  work with us
                </h1>
              </button>
            </div>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                key="nav"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
              >
                <Disclosure.Panel className="md:hidden">
                  <div className="pt-2 pb-8 space-y-1 uppercase flex flex-col items-center">
                    <Link href="/">
                      <a className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 block pl-3 pr-4 py-2 text-base font-medium">
                        Home
                      </a>
                    </Link>
                    {pages.map((page) => {
                      return (
                        <Link href={page.url} key={page.title}>
                          <a className="border-transparent text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 block pl-3 pr-4 py-2 text-base font-medium">
                            {page.title}
                          </a>
                        </Link>
                      )
                    })}
                    <Link href="/">
                      <div className="px-8 w-full">
                        <div className="text-white hover:bg-gray-50 hover:border-gray-300 hover:text-magicPurple-300 border-transparent bg-magicPurple-300 w-full">
                          <a className="font-akira block pl-3 pr-4 py-3 text-base text-center">
                            Work with us
                          </a>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Disclosure.Panel>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  )
}
