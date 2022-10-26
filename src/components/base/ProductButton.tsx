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
              <Disclosure.Button className="text-white pl-3 pr-4 py-2 text-base font-medium uppercase w-full block relative">
                <span>Products</span>
                <ChevronDownIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-white absolute top-2 right-20`}
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
                <div className='bg-neutral-500 bg-opacity-20 w-screen'>
                  {products.map((product) => {
                    return (
                      <Disclosure.Panel key={product.label}>
                        {product.externalLink ? (
                          <a href={product.url} target="_blank" rel="noreferrer">
                            <div className='flex items-center justify-center'>
                              <button
                                disabled={product.comingSoon}
                                className={`group flex items-center rounded-md px-2 py-2 text-sm text-white w-fit disabled:text-gray-400 hover:text-magicPurple-300`}
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
                                className={`group flex items-center rounded-md px-2 py-2 text-sm text-white w-fit disabled:text-gray-400 hover:text-magicPurple-300`}
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
            <Popover.Button className={classnames("text-white hover:text-magicPurple-300 text-center max-w-fit hover:cursor-pointer", isFooter ? "hover:underline" : "text-xs xl:text-base")}>
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
            <Popover.Panel className={classnames("absolute w-56 origin-top-right focus:outline-none button-border flex flex-col justify-center items-center", isFooter ? "left-0 sm:left-24 mt-2 sm:top-0" : "left-0 mt-[9px]")}>
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
                                  className={`group flex items-center rounded-md px-2 py-2 text-sm text-white w-fit disabled:text-gray-400 hover:text-magicPurple-300`}
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
                                  className={`group flex items-center rounded-md px-2 py-2 text-sm text-white w-fit disabled:text-gray-400 hover:text-magicPurple-300`}
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
