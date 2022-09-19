interface InputProps {
  placeholder: string
}

export function Input({ placeholder }: InputProps) {
  return (
    <input
      className="bg-neutral-900 border border-magicPurple-300 px-7 py-3 focus:outline-none focus:border-pinkPotion-300 w-full h-full"
      placeholder={placeholder}
    ></input>
  )
}
