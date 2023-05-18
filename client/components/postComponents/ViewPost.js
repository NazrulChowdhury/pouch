import React, {useEffect, useState} from 'react'
import Prism from 'prismjs'
import "prismjs/themes/prism-dark.css"
import { useQuery } from 'react-query'
import { getPostById } from '../../functions/api'
import {useParams } from 'react-router-dom'
import { message } from 'antd'
import { usePostContext } from '../../context/postContext'

const ViewPost = () => {

    const {edit, postData, setPostData} = usePostContext()
    const {postId} = useParams()

    const {refetch} = useQuery('getPostById',() => getPostById(postId),{
        enabled : false,
        onSuccess : (data) => setPostData(data),
        onError : (error) => message.error(error.response.data)
    })

    useEffect(() => refetch(),[])
    useEffect(() => Prism.highlightAll(),[])

  return (
    <>
        {postData && !edit ? (
            <div>
                <p style={{fontSize : '2rem'}}>{postData.postTitle}</p> <br />
                <div 
                //   dangerouslySetInnerHTML={{__html: postData.postDescription}}
                   style={{whiteSpace: 'pre-wrap'}}
                >
                    <pre className='language-'>
                    {postData.postDescription}
                    </pre>
                </div>
             </div> 
        ) : null }
   </>
  )
}

export default ViewPost