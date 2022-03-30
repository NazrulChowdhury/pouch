import './PageContainer.module.css'
import SideNav from '../navigation/SideNav'
import React, { useState } from 'react'
import { Routes, Route} from "react-router-dom"
import SignIn from '../SignIn'
import { Layout} from 'antd'
import './PageContainer.module.css'
import Burger from '../navigation/Burger'

const PageContainer = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Footer, Sider } = Layout
  const toggle = () => setCollapsed(!collapsed) //style={{height : '100vh'}}
  return (
    <Layout style={{height : '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo"> <img src="./puch .png"/>  </div>
        <SideNav />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Burger collapsed toggle={toggle}/>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}

export default PageContainer



{/* <div>
<Routes>
    <Route exact path="/" element = {<SignIn />}/>
</Routes>
</div> */}