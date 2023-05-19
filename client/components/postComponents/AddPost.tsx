import React from 'react'
import { useMutation } from "react-query"
import { useGlobalContext } from "@contexts/globalContext"
import { message } from "antd"
import PostForm from '../formComponents/PostForm'
import { usePostContext } from '@contexts/postContext'
import { submitPost } from '@services/index'

const AddPost = () => {

  const { fetchNavItems } = useGlobalContext()
  const { 
    showNewPostForm, 
    setShowNewPostForm,
    setShowNewPostButton
  } = usePostContext()
  //@ts-ignore
  const {mutateAsync: addNewPost} = useMutation( submitPost ,{ 
    enabled : false,
    onSuccess : (data) => {
      message.success(data)
      fetchNavItems?.()
      setShowNewPostForm(false)
      setShowNewPostButton(true)
    },
    onError : (error:any) => message.error(error.response.data)
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