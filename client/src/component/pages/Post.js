import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../functions/api'
import Highlight from 'react-highlight'
import EditButton from '../utility/Edit'
import EditPost from '../formComponents/EditPost'

const Post = () => {
    const [edit, setEdit] = useState(false)
    const {postId} = useParams()
    const {data, refetch} = useQuery('getPostById',() => getPostById(postId),{
        enabled : false,
        onError : (error) => message.error(error.response.data)
    })

    useEffect(() => refetch(),[])

  return (
    <div> 
        {data && !edit &&
          <div>
            <p style={{fontSize : '2rem'}}>{data.postTitle}</p> <br />
            <div style={{whiteSpace: 'pre-wrap'}}>
              <Highlight >
                  {data.postDescription}
              </Highlight>
            </div>
          </div>     
        }
        { edit && 
          <EditPost data = {data} />
        }
        <div>
          <EditButton 
            edit={edit}
            setEdit = {setEdit}
          />
        </div>
    </div>
  )
}

export default Post