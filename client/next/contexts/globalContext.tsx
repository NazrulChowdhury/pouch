import React, { createContext, useContext, useState } from 'react'
import { UserDocument } from '../types';

interface GlobalContextProps {
    user: UserDocument | undefined
    setUser: React.Dispatch<React.SetStateAction<UserDocument | undefined>> 
    navs: string[]
    setNavs: React.Dispatch<React.SetStateAction<string[]>>
    fetchNavItems?: () => void;
    setFetchNavItems?: React.Dispatch<React.SetStateAction<() => void>>
  }

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)
export const useGlobalContext = () => useContext(GlobalContext) as GlobalContextProps


const GlobalContextProvider = ({children}:{children : React.ReactNode}) => {
    const [user, setUser] = useState<UserDocument | undefined>(undefined)
    const [navs, setNavs] = useState<string[]>([])
    const [fetchNavItems, setFetchNavItems] = useState<(() => void)>(() => {})

    const value:GlobalContextProps = {
        user, 
        setUser,
        navs, 
        setNavs,
        fetchNavItems, 
        setFetchNavItems
    } 
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider