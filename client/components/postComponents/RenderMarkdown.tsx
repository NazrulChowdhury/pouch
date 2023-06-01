
import React from 'react'
import Markdown from 'markdown-to-jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import { PostDocument } from '@types'

interface IRenderMarkdownProps {
    postData : PostDocument 
}
const RenderMarkdown = ({ postData } : IRenderMarkdownProps) => {

    const markdownContent = postData?.description
    //const codeBlocks = markdownContent?.match(/```([\s\S]*?)```/gms); 
    const codeBlocks = markdownContent?.match(/```([\s\S]*?)```/gms)

console.log('codeBlocks----------------', codeBlocks?.length)
    if (!codeBlocks) {
      return <Markdown>{String(markdownContent)}</Markdown>
    }

    let renderedElements = []
    let startIndex = 0

    codeBlocks.forEach((codeBlock) => {
      const languageMatch = codeBlock.match(/```([\s\S]*?)\n/)
      const language = languageMatch ? languageMatch[1] : ''

      const code = codeBlock.replace(/```[\s\S]*?\n/, '')

      const codeBlockElement = (
        <SyntaxHighlighter language={language} style={theme} key={startIndex}>
          {code}
        </SyntaxHighlighter>
      )

      const plainText = markdownContent?.substring(startIndex, markdownContent.indexOf(codeBlock))
      if (plainText) {
        renderedElements.push(<Markdown key={`plain-${startIndex}`}>{plainText}</Markdown>)
      }

      renderedElements.push(codeBlockElement)

      startIndex = markdownContent?.indexOf(codeBlock)! + codeBlock.length
    })

    if (startIndex < markdownContent!.length) {
      const remainingText = markdownContent?.substring(startIndex)
      if (remainingText) {
        renderedElements.push(<Markdown key={`remaining-${startIndex}`}>{remainingText}</Markdown>)
      }
    }

    return <div>{renderedElements}</div>
}

export default RenderMarkdown

