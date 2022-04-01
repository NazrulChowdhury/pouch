import React from 'react'
import googleButton from '../images/googleButton.png'
const SignIn = () => {
  const handleLogin = () => {
    window.open(`${process.env.REACT_APP_SERVER_HOST_URL}/auth/google`, "_self")
  }
  return (
    <div>
      <button onClick={handleLogin}>
        <img src = {googleButton}/>
      </button>
    </div>
  )
}

export default SignIn