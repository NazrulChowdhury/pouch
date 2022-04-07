import mongoose from "mongoose"
import User from "../model/user.js"

export const getUser = async(provider, id) => {
    const query = {}
    query[`platform.${provider}ID`] = id
    return await User.findOne(query)
}

export const getUserById = async(id) =>{
    return await User.findById(id)
}
export const createGoogleUser = async(profile) =>{
    const { sub, name, email, picture} = profile
    return await new User({
        name : name,
        email:email,
        platform:{
          googleID:sub
        },
        picture,   
    })
    .save()
}
export const createGithubUser = async(profile) =>{
    const { id, name, avatar_url} = profile
    return await new User({
        name : name,
        platform:{
          githubID: id
        },
        picture : avatar_url  
    })
    .save()
}
export const updateUserPicture = async(id, picture) => {
    return await User.updateOne({_id : id}, {picture})
}