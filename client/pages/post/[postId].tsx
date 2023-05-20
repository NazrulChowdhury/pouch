import { Post , AddPost, ViewPost, EditPost } from '@components/postComponents'
import EditButton from '@components/utility/EditButton'
import React from 'react'

const index = () => {
    
    return (
        <>
            <Post>
                <ViewPost />
                <EditPost />
                <EditButton />
            </Post>
        </>
    )
}

export default index