import { AddNewPostButton, Post, AddPost } from '@components/postComponents'
//import AddPost from '@components/postComponents/AddPost'
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
