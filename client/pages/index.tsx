import { AddNewPostButton, Post, AddPost } from '@components/postComponents'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <> 
      <Post>
        <AddPost />
        <AddNewPostButton />
      </Post>
    </>
  )
}

export default Home
