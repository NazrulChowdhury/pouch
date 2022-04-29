import React from 'react'
import {ViewPost,EditPost} from '../postComponents'
import { PostContextProvider } from '../postComponents/postContext'
import EditButton from '../utility/EditButton'

const Post = () => {

  return (
    <div> 
      <PostContextProvider>
        <ViewPost />
        <EditPost />
        <EditButton />
      </PostContextProvider>
    </div>
  )
}

export default Post

