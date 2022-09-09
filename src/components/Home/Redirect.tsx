import Link from 'next/link'

export function HomeRedirect() {
  const buttons = [
    { title: 'what we do', url: '/' },
    { title: 'explore our projects', url: '/projects' },
  ]

  return (
    <div className="flex items-center justify-center">
      <div className="grid md:grid-cols-2 justify-center items-center py-14 max-w-fit gap-x-16 px-10">
        {buttons.map((button) => {
          return (
            <Link key={button.title} href={button.url}>
              <button className="px-[52px] py-3 md:py-7 uppercase bg-magicPurple-300 mb-4 md:w-[367px] font-bold md:text-xl text-white hover:bg-opacity-70">
                {button.title}
              </button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
