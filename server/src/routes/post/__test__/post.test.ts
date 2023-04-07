import supertest from "supertest";
import app from "@app";
import { singlePostInput, singlePostDocument } from "@fixtures";
import * as postService from '@services/post.service'
import mongoose from "mongoose";
import { ApiError } from "../../../Error/ApiError";

describe('Post route Test Suite', () => { 

    describe('createNewPost tests', () => {

        it('Given a valid post input is provided, creates a new post', async() => {
            
            const createPostServiceMock = jest
                .spyOn(postService, 'createNewPost')
                //@ts-ignore
                .mockResolvedValueOnce(singlePostDocument)
            const {statusCode, text} = await supertest(app)
                .post('/api/post')
                .send(singlePostInput)

            expect(statusCode)
                .toBe(200)
            expect(text)
                .toBe('success!')
                
        })

        it('Given invalid input is provided, It fails at validation middleware', async() => {

            const {title, ...inCompletePostInput} = singlePostInput
            const createPostServiceMock = jest
                .spyOn(postService, 'createNewPost')
            const { statusCode } = await supertest(app)
                .post('/api/post')
                .send(inCompletePostInput)
            
            expect(statusCode)
                .toBe(400)
            expect(createPostServiceMock)
                .not.toHaveBeenCalled()

        })
    })

    describe('getPostById tests', () => {

        test('Given a valid postId is provided, should return a post', async() => {

            const mockGetPostById = jest
                .spyOn(postService, 'getPostById')
                //@ts-ignore
                .mockResolvedValueOnce(singlePostDocument)
            const { statusCode, body} = await supertest(app)
                .get('/api/post/somePostId')

            expect(statusCode)
            .toBe(200)
            expect(body)
            .toEqual(singlePostDocument)
        })

        test('Given getPostById service throws, should return 400', async() => {
            
            const mockGetPostById = jest
                .spyOn(postService, 'getPostById')
                .mockRejectedValueOnce(ApiError.badRequest('invalid post id'))
            const { statusCode} = await supertest(app)
                .get('/api/post/somePostId')
            expect(statusCode)
                .toBe(400)
        })
    })
})