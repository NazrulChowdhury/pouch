import React from "react"
import { useGlobalContext } from "../../context/globalContext" 
import Post from "../postComponents"

const Home = () => {

  return (
    <div> 
      <Post>
        <Post.AddPost />
        <Post.AddNewPostButton />
      </Post>
    </div>
  )
}

export default Home