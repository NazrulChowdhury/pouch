import { Profile } from "passport-google-oauth20"
import User from "../models/user.model"
import { GitHubProfile, ProviderType } from "../types"

export const createGoogleUser = async(profile:Profile) =>{
    const { sub, name, email, picture} = profile._json
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

export const createGithubUser = async(profile:GitHubProfile) =>{
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

export const updateUserPicture = async(id:string, imageUrl:string) => {
    return await User.updateOne({_id : id}, {picture: imageUrl})
}

export const getUser = async(provider:ProviderType, id:string) => {
    const query = {} as any
    query[`platform.${provider}ID`] = id
    return await User.findOne(query)
}

export const getUserById = async(id:string) =>{
    return await User.findById(id)
}