import React from 'react'
import { MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons'

const Burger = ({collapsed, toggle}) => {
  return (
    <div style={{color : 'white'}}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => toggle()
        })}
    </div>
  )
}

export default Burger