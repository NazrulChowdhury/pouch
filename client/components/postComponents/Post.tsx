import React from 'react'
import { PostContextProvider } from '@contexts/postContext'

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