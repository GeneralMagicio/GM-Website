import axios from 'axios'
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  useEffect,
} from 'react'
import { checkboxes } from '../components/Contact/Form'

interface SubmitProviderProps {
  children: ReactNode
}

export enum EmailSentStatus {
  UNDEFINED = 'undefined',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface IRequestedFields {
  firstName: string
  email: string
  projectName: string
  projectDescription: string
  services: string[]
  budget: string
  deadline: string
}

interface SubmitContextType {
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
  budgetState: string
  disabled: boolean
  emailSentStatus: string
  dialog: boolean
  isLoading: boolean
  setDialog: Dispatch<SetStateAction<boolean>>
  setBudgetState: Dispatch<string>
  setContactForm: Dispatch<SetStateAction<SubmitContextType>>
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleButton: (event: any) => void
  handleSubmit: (event: any) => void
}

export const initialParams: SubmitContextType = {
  firstName: '',
  email: '',
  projectName: '',
  projectDescription: '',
  services: [''],
  budget: '',
  deadline: '',
  discord: '',
  telegram: '',
  github: '',
  projectLink: '',
  aditionalInformation: '',
  budgetState: '',
  disabled: true,
  emailSentStatus: '',
  dialog: false,
  isLoading: false,
  setDialog: (): void => {
    throw new Error('setDialog must be overridden')
  },
  setBudgetState: (): void => {
    throw new Error('setParams must be overridden')
  },
  setContactForm: (): void => {
    throw new Error('setParams must be overridden')
  },
  handleChange: (): void => {
    throw new Error('handleChange must be overridden')
  },
  handleCheck: (): void => {
    throw new Error('handleCheck must be overridden')
  },
  handleButton: (): void => {
    throw new Error('handleButton must be overridden')
  },
  handleSubmit: (): void => {
    throw new Error('handleSubmit must be overridden')
  },
}

const SubmitContext = createContext<SubmitContextType>(initialParams)

export function SubmitProvider({ children }: SubmitProviderProps) {
  const [contactForm, setContactForm] =
    useState<SubmitContextType>(initialParams)
  const [disabled, setDisabled] = useState<boolean>(true)
  const [selectedCheck, setSelectedCheck] = useState<string[]>([])
  const { budget } = initialParams
  const [budgetState, setBudgetState] = useState(budget)
  const [emailSentStatus, setEmailSentStatus] = useState<EmailSentStatus>(
    EmailSentStatus.UNDEFINED
  )
  const [dialog, setDialog] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setContactForm((previousState) => ({
      ...previousState,
      [name]: value,
    }))
  }

  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    let updatedList = [...selectedCheck]
    if (event.target.checked) {
      updatedList = [...selectedCheck, event.target.name]
    } else {
      updatedList.splice(selectedCheck.indexOf(event.target.name), 1)
    }
    setSelectedCheck(updatedList)
    setContactForm((previousState) => ({
      ...previousState,
      services: updatedList,
    }))
  }

  function handleButton(budgetValue: string) {
    setBudgetState(budgetValue)
    setContactForm((previousState) => ({
      ...previousState,
      budget: budgetValue,
    }))
  }

  console.log(contactForm)

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
    const missingFields: string[] = []
    for (const [k, v] of Object.entries(requestedFields)) {
      if (v.length === 0) {
        missingFields.push(k)
      }
    }
    const { email } = contactForm
    if (
      missingFields.length !== 0 ||
      !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)
    ) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [contactForm])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
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
    setBudgetState('')
    setContactForm(initialParams)
    checkboxes.forEach((checkbox) => {
      const anyCheckbox = document.getElementsByName(
        checkbox
      )[0] as HTMLInputElement
      anyCheckbox.checked = false
    })
    setSelectedCheck([])
  }
  return (
    <SubmitContext.Provider
      value={{
        ...contactForm,
        setContactForm,
        handleChange,
        handleCheck,
        handleButton,
        budgetState,
        setBudgetState,
        disabled,
        emailSentStatus,
        dialog,
        isLoading,
        setDialog,
        handleSubmit,
      }}
    >
      {children}
    </SubmitContext.Provider>
  )
}

export default function useSubmitContext() {
  const context = useContext(SubmitContext)

  return context
}
