export interface WeDoCardProps {
  title: string
  description: string
}

export function WeDoCard({ title, description }: WeDoCardProps) {
  return (
    <div>
      <div className="h-grid-line h-[1px]"></div>
      <div className="mt-10">
        <h2 className="font-akira text-[26px]">{title}</h2>
        <p className="text-2xl mt-6">{description}</p>
        {/* <div className="flex my-6 items-center hover:underline text-magicPurple-300 hover:cursor-pointer">
          <p className="uppercase mr-2">Learn more</p>
          <div className="">
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 4.70456C15.9934 4.53633 15.9242 4.34184 15.8088 4.21922L12.044 0.219116C11.789 -0.0101681 11.2997 -0.104706 11.0146 0.16036C10.7338 0.421485 10.7422 0.927667 11.0218 1.18977L13.6689 3.99866L0.70592 3.99866C0.31612 3.99866 0 4.31477 0 4.70458C0 5.09439 0.316107 5.4105 0.70592 5.4105L13.6689 5.4105L11.0218 8.21939C10.7809 8.46066 10.7364 8.98489 11.0146 9.2488C11.2926 9.51288 11.7993 9.42852 12.044 9.18988L15.8088 5.18978C15.9376 5.05289 16.0003 4.89221 16 4.70444V4.70456Z"
                fill="#A569FF"
              />
            </svg>
          </div>
        </div> */}
      </div>
    </div>
  )
}
