import React, { createContext, useContext, useState } from 'react'
import { SessionData } from '../types';

interface GlobalContextProps {
    userSession: SessionData | undefined
    setUserSession: React.Dispatch<React.SetStateAction<SessionData | undefined>> 
    navs: string[]
    setNavs: React.Dispatch<React.SetStateAction<string[]>>
    searchedTags : string[] 
    setSearchedTags : React.Dispatch<React.SetStateAction<string[]>>
    fetchNavItems?: () => void;
    setFetchNavItems?: React.Dispatch<React.SetStateAction<() => void>>
  }

export const GlobalContext = createContext<GlobalContextProps | undefined>(undefined)
export const useGlobalContext = () => useContext(GlobalContext) as GlobalContextProps


const GlobalContextProvider = ({children}:{children : React.ReactNode}) => {
    const [userSession, setUserSession] = useState<SessionData | undefined>(undefined)
    const [navs, setNavs] = useState<string[]>([])
    const [searchedTags, setSearchedTags] = useState<string[]>([]) 
    const [fetchNavItems, setFetchNavItems] = useState<(() => void)>(() => {})

    const value:GlobalContextProps = {
        userSession, 
        setUserSession,
        navs, 
        setNavs,
        searchedTags, 
        setSearchedTags,
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