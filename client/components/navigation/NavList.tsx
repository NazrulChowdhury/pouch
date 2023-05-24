import React from 'react'
import { Menu } from 'antd'
import { useRouter } from 'next/router'
import { useGlobalContext } from '@contexts/globalContext'

interface NavListProps {
    navs : string[]
}
const NavList = ({navs}: NavListProps) => {
    
    const router = useRouter()
    const {searchedTags} = useGlobalContext()

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>  
            { 
                searchedTags.length ? 
                    searchedTags.map(item =>{ 
                        return (
                            <Menu.Item 
                                key={`searched-${item}`}
                                onClick = {() => router.push(`tag/${item}`)}
                            >
                                {item}
                            </Menu.Item>
                        )
                    })
                : navs.length ?
                    navs.map(item =>{  
                        return (
                            <Menu.Item 
                                key={`nav-${item}`}
                                onClick = {() => router.push(`tag/${item}`)}
                            >
                                {item}
                            </Menu.Item>
                        )
                    })
                : null
            }
        </Menu> 

    )
}

export default NavList