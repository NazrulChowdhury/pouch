import { PostDocument, PostInput, SessionData } from "@types"
import axios from "axios"

export const getSession = async() :  Promise<SessionData | null> => {
    const response =  await axios('/api/getSession',{withCredentials : true})
    return response.data
}

export const submitPost = async(data:PostInput):Promise<string> => {
    const response =  await axios({
        method : 'POST',
        url : '/api/post',
        withCredentials : true,
        data : data
    })
    return response.data 
}

export const getNavs = async() : Promise<string[]>=>{
    const response =  await axios('/api/post/getNavs',{
        withCredentials : true
    })
    return response.data
}

export const getPostsByTagName = async(name:string) : Promise<PostDocument[]> => {
    const response =  await axios(`/api/post/tag/${name}`,{
        withCredentials : true
    })
    return response.data
}

export const getPostById = async (id:string) : Promise<PostDocument> => {
    const response = await axios(`/api/post/getPost/${id}`,{
        withCredentials : true
    })
    return response.data
}

export const updatePost = async(data : PostDocument) : Promise<PostDocument> => {
    const {userId, ...postData} = data
    const response = await axios({
        method : 'POST',
        withCredentials : true,
        url : `/api/post/updatePost`,
        data : {postData}
    })
    return response.data 
}

export const deletePostById = async(postId:string) : Promise<string> => {
    const response = await axios(`/api/post/deletePost/${postId}`)
    return response.data
}

