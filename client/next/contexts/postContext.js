import { createContext, useContext, useState } from "react";

const PostContext = createContext()
export const usePostContext = () => useContext(PostContext)

export const PostContextProvider = ({children}) => {
    const [edit, setEdit] = useState(false)
    const [postData, setPostData] = useState('') 
    const [showNewPostButton, setShowNewPostButton] = useState(true) 
    const [showNewPostForm, setShowNewPostForm] = useState(false)

    const value = {
        edit, setEdit,
        postData, setPostData,
        showNewPostButton, setShowNewPostButton,
        showNewPostForm, setShowNewPostForm
    }

    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}