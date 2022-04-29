import React from 'react'
import { Menu, Dropdown } from 'antd'
import Cancel from './Cancel'
import { Modal, Button } from 'antd'
const confirm = Modal.confirm

const EditButton = ({edit, setEdit, handleDeletePost}) => { 
  const handleEdit = () => setEdit(true)
  const handleEditCancel = () => setEdit(false)
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

  const menu = (
    <Menu>
      <Menu.Item key='edit'>
        <span onClick={handleEdit}>Edit</span>
      </Menu.Item>
      <Menu.Item key = 'delete'>
        <span onClick={handleDelete}>Delete</span>
      </Menu.Item>
    </Menu>
  )
      
  return (
    <>
      {!edit? (
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me 
          </a>
        </Dropdown>
      ) : (<Cancel handleEditCancel = {handleEditCancel}/>)
      }
    </>
  )
}
export default EditButton
