import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-core'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-python'
import { useQuery } from 'react-query'
import { message } from 'antd'
import { usePostContext } from '@contexts/postContext'
import { useRouter } from 'next/router'
import { getPostById } from '@services/index'
import Markdown from 'markdown-to-jsx'

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
 
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const renderMarkdownWithSyntaxHighlighting = () => {
    const markdownContent = postData?.description;
  
    const codeBlocks = markdownContent?.match(/```([\s\S]*?)```/gm);
  
    if (!codeBlocks) {
      return <Markdown>{String(markdownContent)}</Markdown>;
    }
  
    let renderedElements = [];
    let startIndex = 0;
  
    codeBlocks.forEach((codeBlock) => {
      const languageMatch = codeBlock.match(/```([\s\S]*?)\n/);
      const language = languageMatch ? languageMatch[1] : '';
  
      const code = codeBlock.replace(/```[\s\S]*?\n/, '');
  
      let highlightedCode;
      if (language && Prism.languages[language]) {
        highlightedCode = Prism.highlight(code, Prism.languages[language], language);
      } else {
        highlightedCode = code; // If the language is not valid, display the code without highlighting
      }
  
      const codeBlockElement = (
        <pre className={`code-block language-${language}`} key={startIndex}>
          <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      );
  
      const plainText = markdownContent?.substring(startIndex, markdownContent.indexOf(codeBlock));
      if (plainText) {
        renderedElements.push(<Markdown key={`plain-${startIndex}`}>{plainText}</Markdown>);
      }
  
      renderedElements.push(codeBlockElement);
  
      startIndex = markdownContent?.indexOf(codeBlock)! + codeBlock.length;
    });
  
    if (startIndex < markdownContent!.length) {
      const remainingText = markdownContent?.substring(startIndex);
      if (remainingText) {
        renderedElements.push(<Markdown key={`remaining-${startIndex}`}>{remainingText}</Markdown>);
      }
    }
  
    return <div>{renderedElements}</div>;
  };
  
 
  
  return (
    <>
      {postData && !edit ? (
        <div>
          <p style={{ fontSize: '2rem' }}>{postData?.title}</p> <br />
          <div className="content-wrapper">{renderMarkdownWithSyntaxHighlighting()}</div>
        </div>
      ) : null}
    </>
  )
}

export default ViewPost
