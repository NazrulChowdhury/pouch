import { message } from 'antd'
import React from 'react'
import { useMutation } from 'react-query'
import PostForm from '../formComponents/PostForm'
import { usePostContext } from '@contexts/postContext'
import { updatePost } from '@services/index'
import { PostDocument } from '@types'

const EditPost = () => { 

  const {postData, setPostData, edit, setEdit} = usePostContext()

  const {mutateAsync} = useMutation( updatePost,{
    onSuccess : (data) => {
      message.success('success!')
      setPostData?.(data)
      setEdit(false)
    },
    onError : (error:any) => {message.error(error.response.data)}
  })

  return (
    <>
      { edit ? (
        <PostForm 
          data = {postData}
          submitForm={mutateAsync as (data: PostDocument) => void}
        /> ) : null 
      }
    </>
  )
}
export default EditPost