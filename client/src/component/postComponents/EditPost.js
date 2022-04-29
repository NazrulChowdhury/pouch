import { message } from 'antd'
import React from 'react'
import { useMutation } from 'react-query'
import { updatePost } from '../../functions/api'
import PostForm from '../formComponents/PostForm'
import { usePostContext } from './postContext'

const EditPost = () => { 

  const {postData, setPostData, edit,setEdit} = usePostContext()
  const postId = postData._id

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
    <>
      { edit ? (
        <PostForm 
          data = {postData}
          submitForm = {submitHandler}
        /> ) : null 
      }
    </>
  )
}
export default EditPost