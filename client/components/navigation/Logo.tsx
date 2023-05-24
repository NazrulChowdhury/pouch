import Link from 'next/link'
import React from 'react'
import logo from '../../public/devpouchT.png'
const Logo = () => {
  return (
        <div className="logo" > 
            <Link href='/'>
                <img src={logo.src} style={{width : '100%'}}/>  
            </Link>
        </div>
  )
}

export default Logo