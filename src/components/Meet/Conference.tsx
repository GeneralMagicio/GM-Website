export interface MeetConferenceProps {
  title: string
  description: string
  city: string
  country: string
  date: string
}

export function MeetConference({
  title,
  description,
  city,
  country,
  date,
}: MeetConferenceProps) {
  return (
    <div className="grid md:grid-cols-4">
      <div className="md:col-span-2">
        <h3 className="text-2xl font-bold md:text-[28px]">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
      <div className="hidden md:flex md:justify-center">
        <div className="w-fit">
          <h3 className="text-[28px] font-bold">Where</h3>
          <p>
            {city}, {country}
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:justify-center">
        <div className="w-fit">
          <h3 className="text-[28px] font-bold">When</h3>
          <p>{date}</p>
        </div>
      </div>
      <div className="mt-5 flex justify-between md:hidden">
        <div className="text-sm">
          <h3 className="font-bold">Where</h3>
          <p>
            {city}, {country}
          </p>
        </div>
        <div className="ml-5 text-end text-sm md:text-start">
          <h3 className="font-bold">When</h3>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}
