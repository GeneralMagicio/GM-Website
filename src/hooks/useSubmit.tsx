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
    budgetState:string
    setBudgetState: Dispatch<string>
    setContactForm: Dispatch<SetStateAction<SubmitContextType>>
    handleChange: (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => void
    handleCheck: (
      event:
        React.ChangeEvent<HTMLInputElement>
    ) => void
    handleButton: (
      event:
        any
    ) => void
  }
  

  export const initialParams: SubmitContextType = {
    firstName: '',
    email: '',
    projectName: '',
    projectDescription: '',
    services: [],
    budget: '$25k - $50k',
    deadline: '2022-10-07',
    discord: '',
    telegram: '',
    github: '',
    projectLink: '',
    aditionalInformation: '',
    budgetState:'',
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
  }
  
  const SubmitContext = createContext<SubmitContextType>(initialParams)
  
  export function SubmitProvider({ children }: SubmitProviderProps) {
    const [contactForm, setContactForm] = useState<SubmitContextType>(initialParams)
    const [disabled, setDisabled] = useState<boolean>(true)
    const [selectedCheck, setSelectedCheck] = useState<string[]>([])
    const { budget } = initialParams
    const [budgetState, setBudgetState] = useState(budget)

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
  
    function handleButton(e: any) {
      setBudgetState(e)
      setContactForm((previousState) => ({
        ...previousState,
        budget: e,
      }))
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
      for (const [k, v] of Object.entries(requestedFields)) {
        console.log(k,v)
      }
      // if (valuesOfRequeredFields.includes(undefined)) {
      //   setDisabled(true)
      // } else {
      //   setDisabled(false)
      // }
    }, [contactForm])

  
    return (
      <SubmitContext.Provider
        value={{
        ...contactForm,
        setContactForm,
        handleChange,
        handleCheck,
        handleButton,
        budgetState,
        setBudgetState
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
  