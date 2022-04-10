import { message } from 'antd'
import axios from 'axios'
import React from 'react'

const Home = () => {
  const clickhandler = () => {
    axios.get('/api/testError')
    .then(res => console.log('result is', res.data))
    .catch(err =>{ 
      message.error(err.response.data)
    })
  }
  return (
    <div>
      welcome to homePage!
      <button onClick={clickhandler}>click</button>

    </div>
  )
}

export default Home