import React, { useEffect } from 'react'
import { Layout, message} from 'antd'
import { useGlobalContext } from '@contexts/globalContext'
import { useQuery } from 'react-query'
import { getNavs } from '@services/index'
import SearchNav from './SearchNav'
import NavList from './NavList'
import Logo from './Logo'

const SideNav = () => {
  const {Sider} = Layout
  const {navs, setNavs, setFetchNavItems} = useGlobalContext()

  const {refetch: fetchNavItems } = useQuery(
    'getNavs', getNavs,{ 
      onSuccess : data => setNavs(data),
      onError : (error:any) => message.error(error.response.data), 
      enabled : false
    }
  )

  useEffect(() => {
    fetchNavItems()
    setFetchNavItems?.(() => fetchNavItems)
  },[])

  return (
    <>
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
        <Logo />
        <SearchNav navs={navs} />
        <NavList navs={navs}/> 
      </Sider>
  </>
  )
}

export default SideNav