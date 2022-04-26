import { message } from 'antd'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../functions/api'
import Highlight from 'react-highlight'

const Post = () => {
    const {postId} = useParams()
    const {data, refetch} = useQuery('getPostById',() => getPostById(postId),{
        enabled : false,
        onError : (error) => message.error(error.response.data)
    })

    useEffect(() => refetch(),[])

  return (
    <div> 
        {data && 
           <div>
               <p style={{fontSize : '2rem'}}>{data.postTitle}</p> <br />
               <div style={{whiteSpace: 'pre-wrap'}}>
                   <Highlight className = 'css'>
                        {data.postDescription}
                   </Highlight>
                </div>
           </div>
        }
    </div>
  )
}

export default Post