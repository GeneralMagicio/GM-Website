import classnames from 'classnames'

interface ButtonProps {
  arrowColor: string
  bgColor: string
  text: string
  border?: string
}

export function Button({ arrowColor, bgColor, text, border }: ButtonProps) {
  const bgColors: { [key: string]: string } = {
    white: 'bg-white',
    gray: 'bg-neutral-900',
    orange: 'bg-misticOrange-300',
    purple: 'bg-magicPurple-300',
  }

  const firstWord = text.slice(0, text.indexOf(' '))
  const rest = text.substring(text.indexOf(' ') + 1)

  return (
    <div className={classnames(border ? 'button-border' : 'bg-transparent')}>
      <button
        className={classnames(
          'w-full sm:w-[367px] p-5 hover:bg-opacity-70 m-[1px]',
          bgColors[bgColor]
        )}
      >
        <div className="uppercase font-akira text-2xl text-left">
          <p>{firstWord}</p>
          <div className="flex items-center justify-between">
            <p>{rest}</p>
            <span>
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6195 8.08259C24.6095 7.82831 24.5048 7.53434 24.3304 7.34901L18.64 1.30287C18.2545 0.956311 17.515 0.813418 17.0841 1.21406C16.6596 1.60875 16.6723 2.37384 17.095 2.77L21.096 7.01563L1.50254 7.01563C0.91336 7.01563 0.435547 7.49343 0.435547 8.08263C0.435547 8.67183 0.913341 9.14962 1.50254 9.14962L21.096 9.14962L17.095 13.3952C16.7308 13.7599 16.6636 14.5523 17.0841 14.9512C17.5043 15.3503 18.2701 15.2228 18.64 14.8621L24.3304 8.816C24.5252 8.6091 24.6199 8.36623 24.6195 8.08242V8.08259Z"
                  fill={arrowColor}
                />
              </svg>
            </span>
          </div>
        </div>
      </button>
    </div>
  )
}
