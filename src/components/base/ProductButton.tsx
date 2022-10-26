import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

interface product {
  label: string
  comingSoon: boolean
  externalLink: boolean
  url: string
}

export function ProductButtonMenu() {
  const products: product[] = [
    {
      label: 'Swag Shop',
      comingSoon: false,
      externalLink: false,
      url: '/'
    },
    {
      label: 'Praise System',
      comingSoon: true,
      externalLink: false,
      url: '/'
    },
    {
      label: 'Commons Simulator',
      comingSoon: false,
      externalLink: false,
      url: '/'
    },
  ]

  return (
    <div>
      <Popover as="div" className="relative inline-block text-left">
        <div>
          <Popover.Button className="text-white hover:text-magicPurple-300 text-center text-xs xl:text-base max-w-fit hover:cursor-pointer">
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
          <Popover.Panel className="absolute left-0 mt-[9px] w-56 origin-top-right focus:outline-none button-border flex flex-col justify-center items-center">
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
    </div>
  )
}
