import React from 'react'
import { PostContextProvider } from '../../context/postContext'

const Post = ({children}) => {
  return (
    <>
       <PostContextProvider>
           {children}
       </PostContextProvider>
    </>
  )
}

export default Post