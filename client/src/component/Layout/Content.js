import React, { useEffect } from 'react'
import { Routes, Route, useNavigate} from "react-router-dom"
import { useGlobalContext } from '../../context/globalContext'
import Home from '../pages/Home'
import Post from '../pages/Post'
import SignIn from '../pages/SignIn'
import TagHome from '../pages/TagHome'

const Content = () => {

  const {user} = useGlobalContext()
  const navigate = useNavigate()

  useEffect(() => !user? navigate('/signin') : null,[])

  return (
    <>
       <Routes>
            <Route  path="/" element = {<Home />}/>  
            <Route exact path="/signin" element = {<SignIn />}/> 
            <Route exact path="/tag/:tagName" element = {<TagHome />}/>
            <Route exact path="/post/:postId" element = {<Post />}/>
       </Routes>
    </>
  )
}

export default Content