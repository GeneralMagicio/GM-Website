import classNames from 'classnames'
import Image from 'next/image'
import down from 'public/images/icons/down.svg'

interface IButtonUp {
  isVisible: boolean
  onClick: () => void
}

export function ButtonUp({ isVisible, onClick }: IButtonUp) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'fixed bottom-0 right-0 z-50 m-3 h-8 w-8 self-start rounded-full bg-white p-1 hover:opacity-90 sm:hidden lg:mx-8 lg:h-12 lg:w-12 lg:self-center',
        isVisible ? 'block' : 'hidden'
      )}
    >
      <Image src={down} alt="Down" className="rotate-180" />
    </button>
  )
}
