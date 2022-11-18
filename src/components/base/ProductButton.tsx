import { Popover, Transition, Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { Dispatch, Fragment } from 'react'
import classnames from 'classnames'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

interface product {
  label: string
  comingSoon: boolean
  externalLink: boolean
  url: string
}

interface IProductButtonMenu {
  isOpen: boolean
  isFooter: boolean
  isNavMobile: boolean
  setOpenNavMobile: Dispatch<boolean>
}

export const products: product[] = [
  {
    label: 'Swag Shop',
    comingSoon: false,
    externalLink: false,
    url: '/shop'
  },
  {
    label: 'Praise System',
    comingSoon: true,
    externalLink: false,
    url: '/'
  },
  {
    label: 'Commons Simulator',
    comingSoon: true,
    externalLink: false,
    url: '/'
  },
]
export function ProductButtonMenu({ isFooter, isNavMobile, setOpenNavMobile }: IProductButtonMenu) {
  return (
    <>
      {isNavMobile ? (
        <Disclosure>
          {({ open, close }) => (
            <>
              <Disclosure.Button className="relative block w-full py-2 pl-3 pr-4 text-base font-medium uppercase text-white">
                <span>Products</span>
                <ChevronDownIcon
                  className={`${open ? 'rotate-180' : ''
                    } absolute top-2 right-20 h-5 w-5 text-white`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <div className='w-screen bg-neutral-500/20'>
                  {products.map((product) => {
                    return (
                      <Disclosure.Panel key={product.label}>
                        {product.externalLink ? (
                          <a href={product.url} target="_blank" rel="noreferrer">
                            <div className='flex items-center justify-center'>
                              <button
                                disabled={product.comingSoon}
                                className={`group flex w-fit items-center rounded-md p-2 text-sm text-white hover:text-magicPurple-300 disabled:text-gray-400`}
                                onClick={() => { close() }}
                              >
                                {product.label}
                              </button>
                              {product.comingSoon && (
                                <span className='text-[8px] text-pinkPotion-300'>Coming Soon</span>
                              )}
                            </div>
                          </a>
                        ) : (
                          <Link href={product.url}>
                            <div className='flex items-center justify-center'>
                              <button
                                disabled={product.comingSoon}
                                className={`group flex w-fit items-center rounded-md p-2 text-sm text-white hover:text-magicPurple-300 disabled:text-gray-400`}
                                onClick={() => { close(), setOpenNavMobile(false) }}

                              >
                                {product.label}
                              </button>
                              {product.comingSoon && (
                                <span className='text-[8px] text-pinkPotion-300'>Coming Soon</span>
                              )}
                            </div>
                          </Link>
                        )}
                      </Disclosure.Panel>
                    )
                  })}
                </div>
              </Transition>
            </>
          )}
        </Disclosure>
      ) : (
        <Popover as="div" className="relative inline-block text-left">
          <div>
            <Popover.Button className={classnames("max-w-fit text-center text-white hover:cursor-pointer hover:text-magicPurple-300", isFooter ? "hover:underline" : "text-xs xl:text-base")}>
              Products
            </Popover.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className={classnames("button-border absolute flex w-56 origin-top-right flex-col items-center justify-center focus:outline-none", isFooter ? "left-0 mt-2 sm:left-24 sm:top-0" : "left-0 mt-[9px]")}>
              {({ close }) => (
                <div className='my-[1px] w-[calc(100%_-_2px)] bg-neutral-900'>
                  {products.map((product) => {
                    return (
                      <div key={product.label}>
                        <>
                          {product.externalLink ? (
                            <a href={product.url} target="_blank" rel="noreferrer">
                              <div className='flex items-center'>
                                <button
                                  disabled={product.comingSoon}
                                  className={`group flex w-fit items-center rounded-md p-2 text-sm text-white hover:text-magicPurple-300 disabled:text-gray-400`}
                                  onClick={() => { close() }}
                                >
                                  {product.label}
                                </button>
                                {product.comingSoon && (
                                  <span className='text-[8px] text-pinkPotion-300'>Coming Soon</span>
                                )}
                              </div>
                            </a>
                          ) : (
                            <Link href={product.url}>
                              <div className='flex items-center'>
                                <button
                                  disabled={product.comingSoon}
                                  className={`group flex w-fit items-center rounded-md p-2 text-sm text-white hover:text-magicPurple-300 disabled:text-gray-400`}
                                  onClick={() => { close() }}

                                >
                                  {product.label}
                                </button>
                                {product.comingSoon && (
                                  <span className='text-[8px] text-pinkPotion-300'>Coming Soon</span>
                                )}
                              </div>
                            </Link>
                          )}
                        </>
                      </div>
                    )
                  })}
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </Popover >
      )
      }
    </>
  )
}
