import { Button } from 'antd'
import React from 'react'
import { usePostContext } from '@contexts/postContext'

const AddNewPostButton = () => {
  const { 
    showNewPostButton, 
    setShowNewPostButton,
    setShowNewPostForm
  } = usePostContext()
  
  const clickHandler = () => {
    setShowNewPostButton(false)
    setShowNewPostForm(true)
  }
  return (
    <div>
        { showNewPostButton ? (
          <Button onClick={clickHandler}>
            Add New Post
          </Button> ) : null
        }
    </div>
  )
}

export default AddNewPostButton