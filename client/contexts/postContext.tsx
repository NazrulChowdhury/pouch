import { PostDocument } from "@types";
import React, { createContext, useContext, useState, Dispatch } from "react";

interface PostContextType {
    edit : boolean
    setEdit :  React.Dispatch<React.SetStateAction<boolean>>
    postData : PostDocument | undefined
    setPostData :  React.Dispatch<React.SetStateAction<PostDocument | undefined>>
    showNewPostButton : boolean
    setShowNewPostButton : React.Dispatch<React.SetStateAction<boolean>>
    showNewPostForm : boolean
    setShowNewPostForm : React.Dispatch<React.SetStateAction<boolean>>
}
const PostContext = createContext<PostContextType | undefined>(undefined)
export const usePostContext = () => useContext(PostContext) as PostContextType

export const PostContextProvider = ({children}) => {
    const [edit, setEdit] = useState(false)
    const [postData, setPostData] = useState<PostDocument | undefined>(undefined) 
    const [showNewPostButton, setShowNewPostButton] = useState(true) 
    const [showNewPostForm, setShowNewPostForm] = useState(false)

    const value:PostContextType = {
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