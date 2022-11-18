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
          : 'w-full bg-neutral-900'
      )}
    >
      <div
        className={classnames(
          'selected:bg-red-500 m-[1px] flex h-[calc(100%_-_2px)] min-h-[112px] w-[calc(100%_-_2px)] items-center justify-center p-5 hover:bg-opacity-70 md:block md:min-h-min ',
          bgColors[bgColor],
          checked ? 'bg-opacity-70' : ''
        )}
      >
        <div className="text-center font-akira uppercase sm:text-xl md:text-2xl">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
