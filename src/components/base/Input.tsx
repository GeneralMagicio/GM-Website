import { ChangeEvent } from 'react'

interface InputProps {
  name: string
  placeholder: string
  pattern?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  isOnPersonalInfomation: boolean
}

export function Input({
  placeholder,
  pattern,
  onChange,
  name,
  value,
  isOnPersonalInfomation,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <input
        className="peer h-full w-full border border-magicPurple-300 bg-neutral-900 px-7 py-3 invalid:border-[#F05548] focus:border-pinkPotion-300 focus:outline-none"
        placeholder={placeholder}
        pattern={pattern}
        onChange={onChange}
        name={name}
        value={value}
      ></input>
      {isOnPersonalInfomation && (
        <p className="invisible py-1 text-sm text-[#F05548] peer-invalid:visible">
          Please provide a valid email address.
        </p>
      )}
    </div>
  )
}
