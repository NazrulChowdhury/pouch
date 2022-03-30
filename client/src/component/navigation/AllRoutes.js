import React from 'react'
import { Routes, Route} from "react-router-dom"
import SignIn from '../SignIn'

const AllRoutes = () => {
  return (
    <>
       <Routes>
            <Route exact path="/" element = {<SignIn />}/>
       </Routes>
    </>
  )
}

export default AllRoutes