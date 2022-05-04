import React from 'react'
import { Layout} from 'antd'
import SideNav from '../navigation/SideNav'
import './Layout.module.css'

const PageLayout = ({children}) => {
  const { Header, Content, Footer, Sider } = Layout
  return (
    <Layout style={{height : '100vh'}}>
      <SideNav />
      <Layout className="site-layout" style={{overflow: 'auto'}}>
        <Header 
          className="site-layout-background" 
          style={{ 
            padding: 0,
             position : 'fixed',
             width : '100%',
             height : '2em',
             lineHeight : '2em'
             }}
        > 
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

