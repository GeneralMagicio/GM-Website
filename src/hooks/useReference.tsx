import {
    createContext,
    ReactNode,
    useContext,
    useRef,
    RefObject,
    useState,
    Dispatch,
  } from 'react';
  
  
  interface ReferenceProviderProps {
    children: ReactNode;
  }
  
  interface ContextType {
    memberRef: RefObject<HTMLDivElement>,
    serviceRef: RefObject<HTMLDivElement>,
    scrollToMembers: boolean
    setScrollToMembers: Dispatch<boolean>
    scrollToServices: boolean
    setScrollToServices: Dispatch<boolean>
  }
  
  export const ReferenceContext = createContext<ContextType>({} as ContextType);
  
  export function ReferenceProvider({ children }: ReferenceProviderProps) {
      const memberRef = useRef<HTMLDivElement>(null)
      const serviceRef = useRef<HTMLDivElement>(null)
      const [scrollToMembers,setScrollToMembers] = useState(false)
      const [scrollToServices,setScrollToServices] = useState(false)

    return (
      <ReferenceContext.Provider value={{ memberRef,scrollToMembers,setScrollToMembers,serviceRef,scrollToServices,setScrollToServices }}>
        {children}
      </ReferenceContext.Provider>
    );
  }
  
  export default function useReferenceContext() {
    const context = useContext(ReferenceContext);
  
    return context;
  }