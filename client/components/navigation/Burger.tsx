import React from 'react'
import { MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons'

interface iBurger {
  collapsed : boolean,
  toggle : ()=> void
}
const Burger = ({collapsed, toggle}:iBurger) => {
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