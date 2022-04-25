import { message } from 'antd'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getPostById } from '../../functions/api'

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
               <b>{data.postTitle}</b> <br />
               <p>{data.postDescription}</p>
           </div>
        }
    </div>
  )
}

export default Post