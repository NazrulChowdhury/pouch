import React from 'react'
import googleButton from '../images/googleButton.png'
import githubButton from '../images/githubLogin.png'
const SignIn = () => {

  const handleGoogleLogin = () => {
    window.open(`${process.env.REACT_APP_SERVER_HOST_URL}/auth/google`, "_self")
  }

  const handleGithubLogin = () => {
    window.open(`${process.env.REACT_APP_SERVER_HOST_URL}/auth/github`, "_self")
  }

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