import { ChangeEvent } from 'react'

interface InputProps {
  name: string
  placeholder: string
  pattern?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export function Input({
  placeholder,
  pattern,
  onChange,
  name,
  value,
}: InputProps) {
  return (
    <input
      className="bg-neutral-900 border border-magicPurple-300 px-7 py-3 focus:outline-none focus:border-pinkPotion-300 invalid:border-[#F05548] w-full h-full"
      placeholder={placeholder}
      pattern={pattern}
      onChange={onChange}
      name={name}
      value={value}
    ></input>
  )
}
