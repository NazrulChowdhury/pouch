import React, { useEffect } from 'react'
import { Routes, Route, useNavigate} from "react-router-dom"
import { useGlobalContext } from '../../context/globalContext'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'

const Content = () => {

  const {user} = useGlobalContext()
  const navigate = useNavigate()

  useEffect(() => !user? navigate('/signin') : null,[])

  return (
    <>
       <Routes>
            <Route  path="/" element = {<Home />}/>  
            <Route  path="/signin" element = {<SignIn />}/> 
       </Routes>
    </>
  )
}

export default Content