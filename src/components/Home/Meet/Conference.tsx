export interface MeetConfereProps {
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
}: MeetConfereProps) {
  return (
    <div className="grid md:grid-cols-3 lg:gap-x-52 md:gap-x-24">
      <div>
        <h3 className="font-bold text-2xl md:text-[28px]">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
      <div className="hidden md:block">
        <h3 className="font-bold text-[28px]">Where</h3>
        <p>
          {city}, {country}
        </p>
      </div>
      <div className="hidden md:block">
        <h3 className="font-bold text-[28px]">When</h3>
        <p>{date}</p>
      </div>
      <div className="flex justify-between md:hidden mt-5">
        <div className="text-sm">
          <h3 className="font-bold">Where</h3>
          <p>
            {city}, {country}
          </p>
        </div>
        <div className="mr-5 text-sm">
          <h3 className="font-bold">When</h3>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}
