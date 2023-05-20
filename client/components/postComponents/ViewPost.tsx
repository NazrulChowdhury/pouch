import React, {useEffect, useState} from 'react'
import Prism from 'prismjs'
import "prismjs/themes/prism-dark.css"
import { useQuery } from 'react-query'
import { message } from 'antd'
import { usePostContext } from '@contexts/postContext'
import { useRouter } from 'next/router'
import { getPostById } from '@services/index'

const ViewPost = () => {

    const {edit, postData, setPostData} = usePostContext()
    const router = useRouter();
    const {postId} = router.query 

    const {refetch} = useQuery('getPostById',() => getPostById(postId as string),{
        enabled : false,
        onSuccess : (data) => setPostData(data),
        onError : (error:any) => message.error(error.response.data)
    })

    useEffect(() => {
        router.isReady && refetch()
    },[router.isReady])

    useEffect(() => Prism.highlightAll(),[])

  return (
    <>
        {postData && !edit ? (
            <div>
                <p style={{fontSize : '2rem'}}>{postData.title}</p> <br />
                <div 
                //   dangerouslySetInnerHTML={{__html: postData.postDescription}}
                   style={{whiteSpace: 'pre-wrap'}}
                >
                    <pre className='language-'>
                    {postData.description}
                    </pre>
                </div>
             </div> 
        ) : null }
   </>
  )
}

export default ViewPost