export function HomeRedirect() {
  const buttons = [
    { title: 'what we do', link: '' },
    { title: 'explore our projects', link: '' },
  ]

  return (
    <div className="flex flex-col justify-center items-center py-14 md:flex-row">
      {buttons.map((button) => {
        return (
          <button
            key={button.title}
            className="px-[52px] py-3 md:py-7 uppercase bg-magicPurple-300 mb-4 md:mb-0 md:mr-[65px] md:w-[367px] w-[310px] font-bold md:text-xl text-white hover:bg-opacity-70"
          >
            {button.title}
          </button>
        )
      })}
    </div>
  )
}
