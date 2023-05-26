import React from 'react'
import { Modal, message } from 'antd'
import { useMutation, useQuery } from 'react-query'
import { useGlobalContext } from '@contexts/globalContext'
import { usePostContext } from '@contexts/postContext'
import { deletePostById } from '@services/index'
import { useRouter } from 'next/router'

const DeletePost = () => {

  const {postData} = usePostContext()
  const {fetchNavItems} = useGlobalContext()
  const confirm = Modal.confirm
  const router = useRouter()

  const {mutateAsync:handleDeletePost} = useMutation(() => deletePostById(postData!._id),{
    onSuccess : (data) => {
      message.success(data)
      router.push('/')
      fetchNavItems?.()
    },
    onError : (error:any) => {
      message.error(error.response.data)
    }
  })

  const handleDelete = () => {
    confirm({
      title: 'Are you sure delete this post?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        handleDeletePost()
      },
      onCancel() {
        // do nothing
      },
    })
  }

  return (
    <span onClick={handleDelete}>DeletePost</span>
  )
}

export default DeletePost