import React, { useEffect, useState } from 'react'
import { Layout, message} from 'antd'
import SideNav from '../navigation/SideNav'
import './Layout.module.css'
import { getSession } from '@services/index'
import { useQuery } from 'react-query'
import { useGlobalContext } from '@contexts/globalContext'
import FullPageSpinner from './FullPageSpinner'

const PageLayout = ({children}:{children:React.ReactNode}) => {
  
  const {setUser} = useGlobalContext()
  const [initialRender, setInitialRender] = useState(true)
  const { Header, Content, Footer, Sider } = Layout
  
  const {isFetching , refetch: fetchSession } = useQuery(
    'getSession', getSession,{
      onSuccess : data => setUser(data),
      onError : (error:any) => message.error(error.response.data), 
      enabled : false
    }
  )

  useEffect(() => {
    fetchSession()
    setInitialRender(false)
  },[])
  
  return (
    <>
      { !initialRender && !isFetching ?
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
      :
      <FullPageSpinner/>
    }
  </>
  )
}

export default PageLayout

