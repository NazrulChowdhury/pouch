import React from 'react'
//import {ViewPost, EditPost, Post} from '../postComponents'
import Post from '../postComponents'
import EditButton from '../utility/EditButton'

const PostPage = () => {

  return (
    <div> 
      <Post>
        <Post.ViewPost />
        <Post.EditPost />
        <EditButton />
      </Post>
    </div>
  )
}

export default PostPage

