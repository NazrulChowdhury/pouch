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
export const createUser = async(profile) =>{
    const { sub, given_name, family_name, email, picture} = profile
    return await new User({
        firstName:given_name,     
        lastName: family_name,
        email:email,
        platform:{
          googleID:sub
        },
        picture,   
    })
    .save()
}

export const updateUserPicture = async(id, picture) => {
    return await User.updateOne({_id : id}, {picture})
}