import { useGlobalContext } from '@contexts/globalContext'
import React from 'react'
import SideNav from './SideNav'

export const Navigation = () => {
  const { userSession} = useGlobalContext()
  return (
    <>
      {
        userSession ? <SideNav /> : null
      }     
    </>
  )
}
