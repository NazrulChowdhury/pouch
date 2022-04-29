import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { deletePost, getPostById } from '../../functions/api'
import Highlight from 'react-highlight'
import EditButton from '../utility/EditButton'
import EditPost from '../formComponents/EditPost'
import { useGlobalContext } from '../../context/globalContext'

const Post = () => {
  const [edit, setEdit] = useState(false)
  const [postData, setPostData] = useState('')
  const {postId} = useParams()
  const navigate = useNavigate()
  const {fetchNavItems} = useGlobalContext()

  const {refetch} = useQuery('getPostById',() => getPostById(postId),{
    enabled : false,
    onSuccess : (data) => setPostData(data),
    onError : (error) => message.error(error.response.data)
  })

  const {refetch:handleDeletePost} = useQuery('deletePost',() => deletePost(postId),{
    enabled : false,
    onSuccess : (data) => {
      message.success(data)
      navigate('/')
      fetchNavItems()
    },
    onError : (error) => message.error(error.response.data)
  })

  useEffect(() => refetch(),[])

  return (
    <div> 
        {postData && !edit &&
          <div>
            <p style={{fontSize : '2rem'}}>{postData.postTitle}</p> <br />
            <div style={{whiteSpace: 'pre-wrap'}}>
              <Highlight >
                  {postData.postDescription}
              </Highlight>
            </div>
          </div>     
        }
        { edit && 
          <EditPost 
            data = {postData} 
            setPostData = {setPostData}
            setEdit = {setEdit}
          />
        }
        <div>
          <EditButton 
            edit={edit}
            setEdit = {setEdit}
            handleDeletePost = {handleDeletePost}
          />
        </div>
    </div>
  )
}

export default Post