import { message } from 'antd'
import React from 'react'
import { useMutation } from 'react-query'
import { updatePost } from '../../functions/api'
import PostForm from './PostForm'

const EditPost = ({data, setPostData, setEdit}) => { 
  const postId = data._id
  const submitHandler = (data) => { 
    data['postId'] = postId
    mutateAsync(data)
  }
  const {mutateAsync} = useMutation(updatePost,{
    onSuccess : (data) => {
      message.success('success!')
      setPostData(data)
      setEdit(false)
    },
    onError : (error) => message.error(error.response.data)
  })

  return (
    <PostForm 
      data = {data}
      submitForm = {submitHandler}
    />
  )
}
export default EditPost