import { createContext, useContext, useState } from "react";

const PostContext = createContext()
export const usePostContext = () => useContext(PostContext)

export const PostContextProvider = ({children}) => {
    const [edit, setEdit] = useState(false)
    const [postData, setPostData] = useState('') 

    const value = {
        edit, setEdit,
        postData, setPostData,
    }

    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}