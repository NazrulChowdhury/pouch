import React, { useEffect } from 'react'
import { Menu , Layout, message} from 'antd'
//import logo from '../../images/pouch.png'
import logo from '../../images/devpouchT.png'
import { useGlobalContext } from '../../context/globalContext'
import { useQuery } from 'react-query'
import { getNavs } from '../../functions/api'
import { Link, useNavigate } from 'react-router-dom'

const SideNav = () => {
  const {Sider} = Layout
  const {user, setNavs, setFetchNavItems} = useGlobalContext()
  const navigate = useNavigate()

  const {refetch: fetchNavItems, data } = useQuery(
    'getNavs', getNavs,{ 
      onSuccess : data => setNavs(data),
      onError : error => message.error(error.response.data), 
      enabled : false
    }
  )

  useEffect(() => {
    fetchNavItems()
    setFetchNavItems(() => fetchNavItems)
  },[])

  return (
    <>
      { user &&
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
            <Link to='/'>
              <img src={logo} style={{width : '100%'}}/>  
            </Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { data && data.map(item =>{ 
              return (
                <Menu.Item 
                  key={item}
                  onClick = {() => navigate(`tag/${item}`)}
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