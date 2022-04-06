import { Spin } from 'antd'
import React from 'react'

const FullPageSpinner = () => {
  return (
    <div 
    style={{
        height : '100vh', width : '100%', 
        display : 'flex', justifyContent: 'center' ,alignItems : 'center'
    }}
    >
        <Spin size="large" />
    </div>
  )
}

export default FullPageSpinner