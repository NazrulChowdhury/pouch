import React, { useEffect, useState } from 'react'
import { Layout, message} from 'antd'
import './Layout.module.css'
import { getSession } from '@services/index'
import { useQuery } from 'react-query'
import { useGlobalContext } from '@contexts/globalContext'
import FullPageSpinner from './FullPageSpinner'
import { useRouter } from 'next/router'
import { Navigation } from '@components/navigation'

const PageLayout = ({children}:{children:React.ReactNode}) => {
  
  const { setUserSession} = useGlobalContext()
  const { Header, Content, Footer, Sider } = Layout
  const router = useRouter()
  
  const {refetch: fetchSession, isFetching } = useQuery( 
    'getSession', getSession,{
      onSuccess : data => data ? setUserSession(data) : router.push('/signup'),
      onError : (error:any) => message.error(error.response.data), 
      enabled : false
    }
  )

  useEffect(() => {
    fetchSession()
  },[])

  if(isFetching){
    return <FullPageSpinner/>
  }

  return (
    <>
      <Layout style={{height : '100vh'}}>
        <Navigation />
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
    </>
  )
}

export default PageLayout

