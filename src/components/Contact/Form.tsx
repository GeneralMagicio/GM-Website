import { FormEvent, forwardRef, useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import { RadioGroup } from '@headlessui/react'
import { ContactButton } from '@/components/base/ContactButton'
import { Input } from '@/components/base/Input'
import { FormHeader } from '@/components/Contact/FormHeader'
import { SubmitModal } from '@/components/Contact/Modal/SubmitModal'
import useSubmitContext from '@/hooks/useSubmit'
import classNames from 'classnames'

export const checkboxes = [
  'Token Economics',
  'Product Design',
  'DAO Design',
  'Branding',
  'Full stack development',
  'Copywriting',
  'User research and UX Desgin',
  'HR & Hiring',
  'Swag Shop',
]

export const ContactForm = forwardRef<HTMLDivElement>((props, ref) => {
  const {
    firstName,
    email,
    projectName,
    projectDescription,
    deadline,
    discord,
    telegram,
    github,
    projectLink,
    aditionalInformation,
    services,
    budgetState,
    disabled,
    handleChange,
    handleCheck,
    handleButton,
    emailSentStatus,
    dialog,
    isLoading,
    setDialog,
    missingFieldMessage,
    handleSubmit,
  } = useSubmitContext()

  useEffect(() => {
    checkboxes.forEach((checkbox) => {
      const anyCheckbox = document.getElementsByName(
        checkbox
      )[0] as HTMLInputElement
      if (services.includes(checkbox)) {
        anyCheckbox.checked = true
      }
    })
  }, [])

  return (
    <div ref={ref}>
      <form
        className="px-8 py-12 sm:px-16 md:px-36 md:pt-32 md:pb-16"
        onSubmit={(e: FormEvent<HTMLElement>) => {
          handleSubmit(e)
        }}
      >
        <FormHeader title="Personal Information">
          <div className="grid gap-x-7 md:grid-cols-2">
            <Input
              placeholder="First Name *"
              onChange={handleChange}
              name="firstName"
              value={firstName}
              isOnPersonalInfomation={true}
            />
            <Input
              placeholder="E-mail *"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={handleChange}
              name="email"
              value={email}
              isOnPersonalInfomation={true}
            />
            <Input
              placeholder="Discord Handle"
              name="discord"
              onChange={handleChange}
              value={discord}
              isOnPersonalInfomation={true}
            />
            <Input
              placeholder="Telegram Handle"
              name="telegram"
              onChange={handleChange}
              value={telegram}
              isOnPersonalInfomation={true}
            />
            <div className="md:col-span-2">
              <Input
                placeholder="Github Handle"
                name="github"
                onChange={handleChange}
                value={github}
                isOnPersonalInfomation={true}
              />
            </div>
          </div>
        </FormHeader>
        <FormHeader title="Project Details">
          <div className="grid gap-7">
            <Input
              placeholder="Project Name *"
              name="projectName"
              onChange={handleChange}
              value={projectName}
              isOnPersonalInfomation={false}
            />
            <div className="h-72">
              <textarea
                className="h-full w-full resize-none border border-magicPurple-300 bg-neutral-900 px-7 py-3 focus:border-pinkPotion-300 focus:outline-none"
                placeholder="Description *"
                name="projectDescription"
                onChange={handleChange}
                value={projectDescription}
              />
            </div>
            <Input
              placeholder="Project Link"
              name="projectLink"
              onChange={handleChange}
              value={projectLink}
              isOnPersonalInfomation={false}
            />
          </div>
        </FormHeader>
        <FormHeader title="Required Services *">
          <div className="flex justify-center">
            <div className="grid w-fit justify-items-center gap-y-6 gap-x-2 sm:gap-x-8 md:grid-cols-2 md:justify-items-start md:gap-x-16">
              {checkboxes.map((checkbox) => {
                return (
                  <div key={checkbox} className="w-fit">
                    <input
                      className="float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded border border-pinkPotion-300 bg-neutral-900 bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:bg-pinkPotion-300 focus:outline-none"
                      type="checkbox"
                      name={checkbox}
                      onChange={handleCheck}
                    />
                    <label className="inline">{checkbox}</label>
                  </div>
                )
              })}
            </div>
          </div>
        </FormHeader>
        <FormHeader title="Budget & Timeline *">
          <div className="flex flex-col items-center">
            <RadioGroup
              value={budgetState}
              onChange={(budgetValue: string) => {
                handleButton(budgetValue)
              }}
              className="mb-7 grid w-fit grid-cols-2 gap-8"
            >
              <RadioGroup.Option value="<  $5k">
                {({ checked }) => (
                  <ContactButton
                    bgColor="gray"
                    border="linear"
                    text="<  $5k"
                    checked={checked}
                  />
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="$5k - $25k">
                {({ checked }) => (
                  <ContactButton
                    bgColor="gray"
                    border="linear"
                    text="$5k - $25k"
                    checked={checked}
                  />
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="$25k - $50k">
                {({ checked }) => (
                  <ContactButton
                    bgColor="gray"
                    border="linear"
                    text="$25k - $50k"
                    checked={checked}
                  />
                )}
              </RadioGroup.Option>
              <RadioGroup.Option value="$50k +">
                {({ checked }) => (
                  <ContactButton
                    bgColor="gray"
                    border="linear"
                    text="$50k +"
                    checked={checked}
                  />
                )}
              </RadioGroup.Option>
            </RadioGroup>
            <h1 className="mb-6 w-fit font-akira text-[26px]">
              Expected Deadline
            </h1>
            <div className="button-border relative z-50 w-full sm:w-[369px]">
              <input
                type="date"
                className="m-[1px] w-[calc(100%_-_2px)] bg-neutral-900 p-5 text-center font-akira hover:bg-opacity-70 sm:w-[367px] sm:text-xl md:text-[26px]"
                onChange={handleChange}
                name="deadline"
                value={deadline}
              />
            </div>
          </div>
        </FormHeader>
        <FormHeader title="Additional Information">
          <div className="h-72">
            <textarea
              className="h-full w-full resize-none border border-magicPurple-300 bg-neutral-900 px-7 py-3 focus:border-pinkPotion-300 focus:outline-none"
              placeholder="Tell us!"
              name="aditionalInformation"
              onChange={handleChange}
              value={aditionalInformation}
            />
          </div>
        </FormHeader>
        <div className='mx-auto mb-10 w-fit'>
          {(missingFieldMessage.length != 0 || !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.test(email)) && (
            <h3 className='mb-2 text-center text-[#ec6f64]'>To submit your Request, please complete the following missing fields:</h3>
          )}
          <div className={classNames('grid justify-items-center', missingFieldMessage.length === 0 || missingFieldMessage.length === 1 ? 'grid-cols-1' : missingFieldMessage.length === 2 ? 'grid-cols-2' : 'grid-cols-3')}>
            {missingFieldMessage.map((missingField) => {
              return <p key={missingField}>{missingField}</p>
            })}
            {!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g.test(email) && !missingFieldMessage.includes('E-mail') ? <p>Invalid E-mail</p> : ''}
          </div>
        </div>
        <div className=" flex justify-center">
          <button
            disabled={disabled || isLoading}
            className="m-[1px] w-[calc(100%_-_2px)] bg-magicPurple-300 p-5 hover:bg-opacity-70 disabled:cursor-not-allowed disabled:bg-opacity-50 sm:w-[367px]"
          >
            <div className="flex items-center justify-between text-left font-akira text-2xl uppercase">
              submit
              <span>
                {isLoading ? (
                  <Oval color="#ffff" height={24} width={24} />
                ) : (
                  <svg
                    width="25"
                    height="16"
                    viewBox="0 0 25 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.6195 8.08259C24.6095 7.82831 24.5048 7.53434 24.3304 7.34901L18.64 1.30287C18.2545 0.956311 17.515 0.813418 17.0841 1.21406C16.6596 1.60875 16.6723 2.37384 17.095 2.77L21.096 7.01563L1.50254 7.01563C0.91336 7.01563 0.435547 7.49343 0.435547 8.08263C0.435547 8.67183 0.913341 9.14962 1.50254 9.14962L21.096 9.14962L17.095 13.3952C16.7308 13.7599 16.6636 14.5523 17.0841 14.9512C17.5043 15.3503 18.2701 15.2228 18.64 14.8621L24.3304 8.816C24.5252 8.6091 24.6199 8.36623 24.6195 8.08242V8.08259Z"
                      fill="#ffff"
                    />
                  </svg>
                )}
              </span>
            </div>
          </button>
        </div>
      </form>
      {dialog && (
        <SubmitModal
          status={emailSentStatus}
          dialog={dialog}
          setDialog={setDialog}
        />
      )}
    </div>
  )
})

ContactForm.displayName = 'ContactForm'
