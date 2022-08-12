export function HomeRedirect() {
  const buttons = [
    { title: 'what we do', link: '' },
    { title: 'explore our projects', link: '' },
  ]

  return (
    <div className="flex justify-center items-center py-14">
      {buttons.map((button) => {
        return (
          <button
            key={button.title}
            className="px-[52px] py-7 uppercase bg-magicPurple-300 mr-[65px] w-[367px] font-bold text-xl text-white hover:bg-opacity-50"
          >
            {button.title}
          </button>
        )
      })}
    </div>
  )
}
