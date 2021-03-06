import axios from "axios"
import { useEffect } from "react"
import { useGlobalContext } from "../context/globalContext"

export const getSession = async() => {
    const response =  await axios('/api/getSession',{withCredentials : true})
    return response.data
}

export const submitPost = async(data) => {
    const response =  await axios({
        method : 'POST',
        url : '/api/post/createPost',
        withCredentials : true,
        data : {data}
    })
    return response.data
}

export const getNavs = async()=>{
    const response =  await axios('/api/post/getNavs',{
        withCredentials : true
    })
    return response.data
}

export const getPostsByName = async(name) => {
    const response =  await axios(`/api/post/getPostsByTag/${name}`,{
        withCredentials : true
    })
    return response.data
}

export const getPostById = async (id) => {
    const response = await axios(`/api/post/getPost/${id}`,{
        withCredentials : true
    })
    return response.data
}

export const updatePost = async(data) => {
    const response = await axios({
        method : 'POST',
        withCredentials : true,
        url : `/api/post/updatePost`,
        data : {data}
    })
    return response.data
}

export const deletePostById = async(postId) => {
    const response = await axios(`/api/post/deletePost/${postId}`)
    return response.data
}