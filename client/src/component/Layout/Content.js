import React from 'react'
import { Routes, Route} from "react-router-dom"
import Home from '../Home'
import SignIn from '../SignIn'

const Content = () => {
  return (
    <>
       <Routes>
            <Route  path="/" element = {<Home />}/>  
            <Route exact path="/signIn" element = {<SignIn />}/>
       </Routes>
    </>
  )
}

export default Content