import React from 'react'
import { Menu, Dropdown, Button } from 'antd'
import Cancel from './Cancel'
import { usePostContext } from '../postComponents/postContext'
import { DeletePost } from '../postComponents'
import { AiOutlineSetting } from "react-icons/ai"
const EditButton = () => { 

  const {edit, setEdit} = usePostContext()

  const handleEdit = () => setEdit(true)
  const handleEditCancel = () => setEdit(false)

  const menu = (
    <Menu>
      <Menu.Item key='edit'>
        <span onClick={handleEdit}>Edit</span>
      </Menu.Item>
      <Menu.Item key = 'delete'>
        <DeletePost />
      </Menu.Item>
    </Menu>
  )
      
  return (
    <>
      {!edit? (
        <Dropdown overlay={menu}>
          <Button>
            <AiOutlineSetting />
          </Button>
        </Dropdown>
      ) : (<Cancel handleEditCancel = {handleEditCancel}/>)
      }
    </>
  )
}
export default EditButton
