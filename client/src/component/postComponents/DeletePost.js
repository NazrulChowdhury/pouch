import React from 'react'
import { Modal, message } from 'antd'
import { useQuery } from 'react-query'
import { deletePostById } from '../../functions/api'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context/globalContext'
import { usePostContext } from '../../context/postContext'

const DeletePost = () => {

  const {postData} = usePostContext
  const {fetchNavItems} = useGlobalContext()
  const navigate = useNavigate()
  const confirm = Modal.confirm

  const {refetch:handleDeletePost} = useQuery('deletePost',() => deletePostById(postData._id),{
    enabled : false,
    onSuccess : (data) => {
      message.success(data)
      navigate('/')
      fetchNavItems()
    },
    onError : (error) => message.error(error.response.data)
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