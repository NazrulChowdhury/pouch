import React from 'react'
import { PostContextProvider } from '../../context/postContext'
import {ViewPost, EditPost, Post} from '../postComponents'
import EditButton from '../utility/EditButton'

const PostPage = () => {

  return (
    <div> 
      <Post>
        <ViewPost />
        <EditPost />
        <EditButton />
      </Post>
    </div>
  )
}

export default PostPage

