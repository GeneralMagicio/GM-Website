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
        className="bg-neutral-900 border border-magicPurple-300 px-7 py-3 focus:outline-none focus:border-pinkPotion-300 invalid:border-[#F05548] w-full h-full peer"
        placeholder={placeholder}
        pattern={pattern}
        onChange={onChange}
        name={name}
        value={value}
      ></input>
      {isOnPersonalInfomation && (
        <p className="py-1 invisible peer-invalid:visible text-[#F05548] text-sm">
          Please provide a valid email address.
        </p>
      )}
    </div>
  )
}
