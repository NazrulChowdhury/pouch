import React from 'react'
import { Layout} from 'antd'
import './PageContainer.module.css'
import AllRoutes from '../navigation/AllRoutes'
import SideNav from '../navigation/SideNav'
import './PageContainer.module.css'

const PageContainer = () => {
  const { Header, Content, Footer, Sider } = Layout
  return (
    <Layout style={{height : '100vh'}}>
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
        <div className="logo"> <img src="./puch .png"/>  </div>
        <SideNav />
      </Sider>
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
          <AllRoutes />
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