import mongoose from "mongoose";
import supertest from "supertest";
import app from "@app";
import { connectMongo, disconnectMongo } from "@util/mongo";
import { manyPosts, singlePostInput, singlePost } from "@fixtures";
import { Post, PostDocument } from "@types";
import * as postService from '@services/post.service'
const postId = new mongoose.Types.ObjectId().toString();
const postResponse  = {...singlePost, _id : postId } as PostDocument
//const postsArray = manyPosts

describe('Post route Test Suite', () => { 

    beforeAll(async () => {
        await connectMongo(true)
    })

    afterAll(async () => {
      await disconnectMongo()
    })

    describe('createNewPost controller', () => {
        it('Given a valid input is provided, creates a new post', async() => {
            const createPostServiceMock = jest
                .spyOn(postService, 'createNewPost')
                .mockRejectedValueOnce(postResponse)
            const {} = await supertest(app)
            .post('/api/post')
            .send(singlePostInput)
        })
    })
})