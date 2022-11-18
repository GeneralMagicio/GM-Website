interface FormHeaderProps {
  children: React.ReactNode
  title: string
}

export function FormHeader({ children, title }: FormHeaderProps) {
  return (
    <div className="mb-11">
      <h1 className="font-akira text-[26px]">{title}</h1>
      <div className="h-grid-line mt-6 mb-7 h-[1px]"></div>
      {children}
    </div>
  )
}
