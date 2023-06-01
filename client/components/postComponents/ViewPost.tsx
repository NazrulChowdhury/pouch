import React, { useEffect } from 'react'
import { useQuery } from 'react-query'
import { message } from 'antd'
import { usePostContext } from '@contexts/postContext'
import { useRouter } from 'next/router'
import { getPostById } from '@services/index'
import RenderMarkdown from './RenderMarkdown'
const ViewPost = () => {
  const { edit, postData, setPostData } = usePostContext()
  const router = useRouter()
  const { postId } = router.query

  const { refetch } = useQuery('getPostById', () => getPostById(postId as string), {
    enabled: false,
    onSuccess: (data) => setPostData(data),
    onError: (error: any) => message.error(error.response.data),
  })

  useEffect(() => {
    if (router.isReady) {
      refetch()
    }
  }, [router.isReady])


  return (
    <>
      {postData && !edit ? (
        <div>
          <p style={{ fontSize: '2rem' }}>{postData?.title}</p> <br />
          {/* <div className="content-wrapper">{renderMarkdownWithSyntaxHighlighting()}</div> */}
          <div className="content-wrapper">
            <RenderMarkdown postData={postData} />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ViewPost



