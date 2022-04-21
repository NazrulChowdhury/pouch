import React, { useEffect } from 'react'
import { Menu , Layout} from 'antd'
import logo from '../../images/pouch.png'
import { useGlobalContext } from '../../context/globalContext'
import { useQuery } from 'react-query'
import { getNavs } from '../../functions/api'

const SideNav = () => {
  const {Sider} = Layout
  const {user, setNavs, navs} = useGlobalContext()

  const {data, refetch} = useQuery('getNavs', getNavs,{
    enabled : false,
    onSuccess : (data) => setNavs(data)
  })

  useEffect(() => refetch(),[])

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
          <div className="logo"> <img src={logo}/>  </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            { data && data.map(item =>{ 
              return (<Menu.Item key={item}>{item}</Menu.Item>)
            })}
          </Menu>
        </Sider>
      }
  </>
  )
}

export default SideNav