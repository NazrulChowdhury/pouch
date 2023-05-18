import React, { useEffect } from 'react'
import googleButton from '../../images/googleButton.png'
import githubButton from '../../images/githubLogin.png'
import { useGlobalContext } from '../../context/globalContext.js'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const {user} = useGlobalContext()
  const navigate = useNavigate()

  const handleGoogleLogin = () => {
    window.open(`${process.env.REACT_APP_SERVER_HOST_URL}/auth/google`, "_self")
  }
  const handleGithubLogin = () => {
    window.open(`${process.env.REACT_APP_SERVER_HOST_URL}/auth/github`, "_self")
  }
  
  useEffect(() => !user? navigate('/') : null,[])

  return (
    <div style={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems: 'center'}}>
      <button onClick={handleGoogleLogin}>
        <img src = {googleButton}/>
      </button>
      <button onClick={handleGithubLogin}>
        <img src = {githubButton}/>
      </button>
    </div>
  )
}

export default SignIn