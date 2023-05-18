import React from 'react'
import { useMutation } from "react-query"
import { useGlobalContext } from "../../context/globalContext"
import { submitPost } from "../../functions/api"
import { message } from "antd"
import PostForm from '../formComponents/PostForm'
import { usePostContext } from '../../context/postContext'

const AddPost = () => {

  const { fetchNavItems } = useGlobalContext()
  const { 
    showNewPostForm, 
    setShowNewPostForm,
    setShowNewPostButton
  } = usePostContext()

  const {mutateAsync: addNewPost} = useMutation(submitPost,{ 
    enabled : false,
    onSuccess : (data) => {
      message.success(data)
      fetchNavItems()
      setShowNewPostForm(false)
      setShowNewPostButton(true)
    },
    onError : (error) => message.error(error.response.data)
  })

  return (
    <div>
        {showNewPostForm ? (
          <PostForm submitForm = {addNewPost}/>
          ) : null
        }
    </div>
  )
}

export default AddPost