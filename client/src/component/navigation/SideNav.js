import React from 'react'
import { Menu , Layout} from 'antd'
import { UploadOutlined, UserOutlined,VideoCameraOutlined} from '@ant-design/icons'
import logo from '../../images/pouch.png'
import { useGlobalContext } from '../../context/globalContext'

const SideNav = () => {
  const {Sider} = Layout
  const {user} = useGlobalContext()
  return (
    <>
      {user &&
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          // position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      > 
        <div className="logo"> <img src={logo}/>  </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      }
  </>
  )
}

export default SideNav