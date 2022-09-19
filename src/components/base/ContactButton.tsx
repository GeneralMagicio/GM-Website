import classnames from 'classnames'

interface ButtonProps {
  bgColor: string
  text: string
  border?: string
}

export function ContactButton({ bgColor, text, border }: ButtonProps) {
  const bgColors: { [key: string]: string } = {
    white: 'bg-white',
    gray: 'bg-neutral-900',
    orange: 'bg-misticOrange-300',
    purple: 'bg-magicPurple-300',
  }

  return (
    <div
      className={classnames(
        border ? 'button-border w-fullrelative z-50' : 'bg-neutral-900 w-full'
      )}
    >
      <button
        className={classnames(
          'w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] p-5 hover:bg-opacity-70 m-[1px]',
          bgColors[bgColor]
        )}
      >
        <div className="uppercase font-akira sm:text-xl md:text-2xl text-center">
          <p>{text}</p>
        </div>
      </button>
    </div>
  )
}