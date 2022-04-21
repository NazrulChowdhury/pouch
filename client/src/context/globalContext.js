import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)

const GlobalContextProvider = ({children}) => {
    const [user, setUser] = useState(false)
    const [navs, setNavs] = useState([])
    const value = {
        user, setUser,
        navs, setNavs
    }
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider