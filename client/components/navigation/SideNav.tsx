import React, { useEffect } from 'react'
import { Menu , Layout, message} from 'antd'
import logo from '../../public/devpouchT.png'
import { useGlobalContext } from '@contexts/globalContext'
import { useQuery } from 'react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getNavs } from '@services/index'

const SideNav = () => {
  const {Sider} = Layout
  const {userSession, setNavs, setFetchNavItems} = useGlobalContext()
  const router = useRouter()

  const {refetch: fetchNavItems, data } = useQuery(
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
      { userSession &&
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
          <div className="logo" > 
            <Link href='/'>
              <img src={logo.src} style={{width : '100%'}}/>  
            </Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { data && data.map(item =>{ 
              return (
                <Menu.Item 
                  key={item}
                  onClick = {() => router.push(`tag/${item}`)}
                >
                  {item}
                </Menu.Item>
              )
            })}
          </Menu>
        </Sider>
      }
  </>
  )
}

export default SideNav