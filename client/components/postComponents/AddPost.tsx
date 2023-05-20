import React from 'react'
import { useMutation } from "react-query"
import { useGlobalContext } from "@contexts/globalContext"
import { message } from "antd"
import PostForm from '../formComponents/PostForm'
import { usePostContext } from '@contexts/postContext'
import { submitPost } from '@services/index'
import { PostDocument } from '@types'

const AddPost = () => {

  const { fetchNavItems } = useGlobalContext()
  const { 
    showNewPostForm, 
    setShowNewPostForm,
    setShowNewPostButton
  } = usePostContext()

  const {mutateAsync} = useMutation( submitPost ,{ 
    onSuccess : (data) => {
      message.success(data)
      fetchNavItems?.()
      setShowNewPostForm(false)
      setShowNewPostButton(true)
    },
    onError : (error:any) => {
      message.error(error.response.data)
    }
  })

  return (
    <div>
      {showNewPostForm ? 
        <PostForm submitForm = {mutateAsync as (data: PostDocument) => void}/>
        : 
        null
      }
    </div>
  )
}

export default AddPost