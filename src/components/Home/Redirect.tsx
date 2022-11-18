import { forwardRef } from 'react'
import Link from 'next/link'

export const HomeRedirect = forwardRef<HTMLDivElement>((props, ref) => {
  const buttons = [
    { title: 'what we do', url: '/about' },
    { title: 'explore our projects', url: '/projects' },
  ]

  return (
    <div className="flex items-center justify-center" ref={ref}>
      <div className="grid max-w-fit items-center justify-center gap-x-16 py-14 px-10 lg:grid-cols-2">
        {buttons.map((button) => {
          return (
            <Link key={button.title} href={button.url}>
              <button className="mb-4 bg-magicPurple-300 px-[52px] py-3 font-bold uppercase text-white hover:bg-opacity-70 md:w-[367px] md:py-7 md:text-xl">
                {button.title}
              </button>
            </Link>
          )
        })}
      </div>
    </div>
  )
})

HomeRedirect.displayName = 'HomeRedirect'
