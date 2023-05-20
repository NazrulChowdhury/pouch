import React, { useEffect } from 'react'
import googleButton from '../public/googleButton.png'
import githubButton from '../public/githubLogin.png'
import { useGlobalContext } from '@contexts/globalContext'
import { useRouter } from 'next/router'
import { SERVER_HOST_URL } from 'environment'

const signup = () => {

  const { userSession } = useGlobalContext()
  const router = useRouter()

  const handleGoogleLogin = () => {
    window.open(`${SERVER_HOST_URL}/auth/google`, "_self")
  }
  const handleGithubLogin = () => {
    window.open(`${SERVER_HOST_URL}/auth/github`, "_self")
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