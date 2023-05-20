import React, { useEffect } from 'react'
import googleButton from '../public/googleButton.png'
import githubButton from '../public/githubLogin.png'
import { useGlobalContext } from '@contexts/globalContext.js'
import { useRouter } from 'next/router'

const signup = () => {

  const { userSession } = useGlobalContext()
  const router = useRouter()

  const handleGoogleLogin = () => {
    window.open(`${process.env.SERVER_HOST_URL}/auth/google`, "_self")
  }
  const handleGithubLogin = () => {
    window.open(`${process.env.SERVER_HOST_URL}/auth/github`, "_self")
  }
  
  //useEffect(() => !userSession? router.push('/') : null,[])

  return (
    <div style={{ display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems: 'center'}}>
      <button onClick={handleGoogleLogin}>
        <img src = {googleButton.src}/>
      </button>
      <button onClick={handleGithubLogin}>
        <img src = {githubButton.src}/>
      </button>
    </div>
  )
}

export default signup