import { ChangeEvent, forwardRef, useEffect, useState } from 'react'
import { ContactButton } from '../base/ContactButton'
import { Input } from '../base/Input'
import { FormHeader } from './FormHeader'
import { SubmitModal } from './Modal/SubmitModal'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import { RadioGroup } from '@headlessui/react'
import useSubmitContext from '../../hooks/useSubmit'

export enum EmailSentStatus {
  UNDEFINED = 'undefined',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface IContactForm {
  firstName: string
  email: string
  projectName: string
  projectDescription: string
  services: string[]
  budget: string
  deadline: string
  discord: string
  telegram: string
  github: string
  projectLink: string
  aditionalInformation: string
}

interface IRequestedFields {
  firstName: string | undefined
  email: string | undefined
  projectName: string | undefined
  projectDescription: string | undefined
  services: string[] | undefined
  budget: string | undefined
  deadline: string | undefined
}

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
    aditionalInformation ,
    budgetState,
    handleChange,
    handleCheck,
    handleButton
  } = useSubmitContext()

  const [emailSentStatus, setEmailSentStatus] = useState<EmailSentStatus>(
    EmailSentStatus.UNDEFINED
  )
  const [dialog, setDialog] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [contactForm, setContactForm] = useState<IContactForm>(
    {} as IContactForm
  )
  const checkboxes = [
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

  const handleSubmit = async (e: any) => {
    setIsLoading(true)
    e.preventDefault()
    try {
      const response = await axios.post('/api/mail/contact', contactForm)
      const { status } = response

      if (status === 200) {
        setEmailSentStatus(EmailSentStatus.SUCCESS)
        setDialog(true)
      } else {
        setEmailSentStatus(EmailSentStatus.ERROR)
        setDialog(true)
      }
    } catch (e) {
      setEmailSentStatus(EmailSentStatus.ERROR)
    }
    setIsLoading(false)
  }
  useEffect(() => {
    const requestedFields: IRequestedFields = (({
      firstName,
      email,
      projectName,
      projectDescription,
      services,
      budget,
      deadline,
    }) => ({
      firstName,
      email,
      projectName,
      projectDescription,
      services,
      budget,
      deadline,
    }))(contactForm)
    const valuesOfRequeredFields = Object.values(requestedFields)

    if (valuesOfRequeredFields.includes(undefined)) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [contactForm])
  return (
    <div ref={ref}>
      <form
        className="pt-12 pb-12 md:pt-32 md:pb-16 px-8 sm:px-16 md:px-36"
        onSubmit={(e) => {
          handleSubmit(e)
        }}
      >
        <FormHeader title="Personal Information">
          <div className="grid md:grid-cols-2 gap-7">
            <Input
              placeholder="First Name *"
              onChange={handleChange}
              name="firstName"
              value={firstName}
            />
            <Input
              placeholder="E-mail *"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={handleChange}
              name="email"
              value={email}
            />
            <Input
              placeholder="Discord Handle"
              name="discord"
              onChange={handleChange}
              value={discord}
            />
            <Input
              placeholder="Telegram Handle"
              name="telegram"
              onChange={handleChange}
              value={telegram}
            />
            <div className="md:col-span-2">
              <Input
                placeholder="Github Handle"
                name="github"
                onChange={handleChange}
                value={github}
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
            />
            <div className="h-72">
              <textarea
                className="resize-none bg-neutral-900 h-full w-full border border-magicPurple-300 px-7 py-3 focus:outline-none focus:border-pinkPotion-300"
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
            />
          </div>
        </FormHeader>
        <FormHeader title="Required Services">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 w-fit gap-y-6 gap-x-2 sm:gap-x-8 md:gap-x-16">
              {checkboxes.map((checkbox) => {
                return (
                  <div key={checkbox} className="w-fit">
                    <input
                      className="appearance-none h-4 w-4 border border-pinkPotion-300 rounded bg-neutral-900 checked:bg-pinkPotion-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
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
        <FormHeader title="Budget & Timeline">
          <div className="flex flex-col items-center">
            <RadioGroup
              value={budgetState}
              onChange={(e: any) => {
                handleButton(e)
              }}
              className="grid grid-cols-2 w-fit gap-8 mb-7"
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
            <h1 className="font-akira text-[26px] w-fit mb-6">
              Expected Deadline
            </h1>
            <div className="button-border w-full sm:w-[369px] relative z-50">
              <input
                type="date"
                className="w-[calc(100%_-_2px)] sm:w-[367px] p-5 hover:bg-opacity-70 m-[1px] bg-neutral-900 font-akira text-center sm:text-xl md:text-[26px]"
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
              className="resize-none bg-neutral-900 h-full w-full border border-magicPurple-300 px-7 py-3 focus:outline-none focus:border-pinkPotion-300"
              placeholder="Tell us!"
              name="aditionalInformation"
              onChange={handleChange}
              value={aditionalInformation}
            />
          </div>
        </FormHeader>
        <div className=" flex justify-center">
          <button
            disabled={disabled || isLoading}
            className="w-[calc(100%_-_2px)] sm:w-[367px] p-5 hover:bg-opacity-70 m-[1px] bg-magicPurple-300 disabled:bg-opacity-50 disabled:cursor-not-allowed"
          >
            <div className="uppercase font-akira text-2xl text-left flex items-center justify-between">
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
