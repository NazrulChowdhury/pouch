import React from 'react'
import { Menu, Dropdown } from 'antd'
import { BarsOutlined } from '@ant-design/icons';
import Cancel from './Cancel';

const EditButton = ({edit, setEdit}) => { 
    const handleEdit = () => setEdit(true)
    const handleDelete = () => {console.log('handle delete')}
    const handleEditCancel = () => setEdit(false)
    const menu = (
        <Menu>
          <Menu.Item key='edit'>
            <span onClick={handleEdit}>Edit</span>
          </Menu.Item>
          <Menu.Item key = 'delete'>
            <span onClick={handleDelete}>Delete</span>
          </Menu.Item>
        </Menu>
      );
      
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
