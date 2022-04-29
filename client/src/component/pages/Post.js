import React from 'react'
import { PostContextProvider } from '../../context/postContext'
import {ViewPost,EditPost} from '../postComponents'
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

