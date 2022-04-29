import React, {useEffect} from 'react'
import Highlight from 'react-highlight'
import { useQuery } from 'react-query'
import { getPostById } from '../../functions/api'
import {useParams } from 'react-router-dom'
import { message } from 'antd'
import { usePostContext } from './postContext'

const ViewPost = () => {

    const {edit, postData, setPostData} = usePostContext()
    const {postId} = useParams()

    const {refetch} = useQuery('getPostById',() => getPostById(postId),{
        enabled : false,
        onSuccess : (data) => setPostData(data),
        onError : (error) => message.error(error.response.data)
    })

    useEffect(() => refetch(),[])

  return (
    <>
        {postData && !edit ? (
            <div>
                <p style={{fontSize : '2rem'}}>{postData.postTitle}</p> <br />
                <div style={{whiteSpace: 'pre-wrap'}}>
                    <Highlight >
                        {postData.postDescription}
                    </Highlight>
                </div>
            </div> 
        ) : null }
   </>
  )
}

export default ViewPost