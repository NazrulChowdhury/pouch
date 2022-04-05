import React from 'react'
import { Layout} from 'antd'
import SideNav from '../navigation/SideNav'
import './Layout.module.css'

const PageLayout = ({children}) => {
  const { Header, Content, Footer, Sider } = Layout
  return (
    <Layout style={{height : '100vh'}}>
      <SideNav />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default PageLayout

