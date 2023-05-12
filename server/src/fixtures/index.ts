import { PostDocument, PostInput, Post, UserDocument, UserInput } from "@types";
import mongoose from "mongoose";

export const singlePostInput:PostInput = {
    title:'first post tile',
    description : 'some description',
    tags : ['tag1']
}

export const singlePost:Post = {  
    userId : 'user1',
    title:'first post tile',
    description : 'some description',
    tags : ['tag1']
}
export const singlePostDocument = {  
    _id : new mongoose.Types.ObjectId().toString(), 
    userId : 'user1',
    title:'first post tile',
    description : 'some description',
    tags : ['tag1']
} as PostDocument

export const manyPosts:Post[] = [
    {  
        userId : 'user1',
        title:'first post tile',
        description : 'some description',
        tags : ['tag1']
    }, {
        userId : 'user2',
        title:'second post title ',
        description : 'some description',
        tags : ['tag2']
    },{
        userId : 'user3',
        title:'third post title ',
        description : 'some description',
        tags : ['tag3']
    },{  
        userId : 'user1',
        title:'fourth post title',
        description : 'some description',
        tags : ['tag4']
    }, {  
        userId : 'user1',
        title:'fifth post title',
        description : 'some description',
        tags : ['javascript']
    },
    {  
        userId : 'user1',
        title:'fifth post title',
        description : 'some description',
        tags : ['javascript']
    },{  
        userId : 'user2',
        title:'sixth post title',
        description : 'some description',
        tags : ['javascript']
    }
]

export const googleUserInput =  { 
    _json: {
        name:'user1',
        email:'user1@email.com',
        picture : 'http:pictureLink',
        sub : 'user1GoogleId'
    }
}

export const gitHubUserInput =  { 
    name:'user1',
    avatar_url : 'http:pictureLink',
    id : 'user1GithubId'
}

export const googleUserDocument ={
    _id : mongoose.Types.ObjectId.toString(),
    name:'user1',
    email:'user1@email.com',
    picture : 'http:pictureLink',
    platform:{
        googleID: 'user1GoogleId',
    }
} as UserDocument