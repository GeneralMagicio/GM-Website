import classnames from 'classnames'

interface ButtonProps {
  bgColor: string
  text: string
  border?: string
  checked?: boolean
}

export function ContactButton({ bgColor, text, border, checked }: ButtonProps) {
  const bgColors: { [key: string]: string } = {
    white: 'bg-white',
    gray: 'bg-neutral-900',
    orange: 'bg-misticOrange-300',
    purple: 'bg-magicPurple-300',
  }

  return (
    <div
      className={classnames(
        border
          ? 'button-border w-fullrelative z-50 flex'
          : 'bg-neutral-900 w-full'
      )}
    >
      <div
        className={classnames(
          'w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] p-5 hover:bg-opacity-70 m-[1px] selected:bg-red-500',
          bgColors[bgColor],
          checked ? 'bg-opacity-70' : ''
        )}
      >
        <div className="uppercase font-akira sm:text-xl md:text-2xl text-center">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
