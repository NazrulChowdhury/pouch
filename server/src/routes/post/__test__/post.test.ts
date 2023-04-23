import supertest from "supertest";
import app from "@app";
import { singlePostInput, singlePostDocument } from "@fixtures";
import * as postService from '@services/post.service'
import { ApiError } from "@error/ApiError"

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
            const { statusCode, error, text, body } = await supertest(app)
                .post('/api/post')
                .send(inCompletePostInput)
            expect(statusCode)
                .toBe(400)
            expect(createPostServiceMock)
                .not.toHaveBeenCalled()

        })
    })

    describe('api/post/:postId getPostById tests', () => {

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

    describe('/api/post/tag/:tagName tests', () => {

        test('Given a valid tag is provided, should return 200', async() => {

            const mockGetAllPostsByTagName = jest
                .spyOn(postService, 'getAllPostsByTagName')
                //@ts-ignore
                .mockResolvedValue(['post'])           
            const {statusCode} = await supertest(app)
                .get('/api/post/tag/someTagName')
            
            expect(statusCode)
                .toBe(200)
            expect(mockGetAllPostsByTagName)
                .toHaveBeenCalledTimes(1)

        })

        test('Given an invalid random tag is provided, should return 401', async() => {

            const mockGetAllPostsByTagName = jest
                .spyOn(postService, 'getAllPostsByTagName')
                //@ts-ignore
                .mockResolvedValue([])           
            const {statusCode} = await supertest(app)
                .get('/api/post/tag/someTagName')
            
            expect(statusCode)
                .toBe(400)
            expect(mockGetAllPostsByTagName)
                .toHaveBeenCalledTimes(1)
                
        })
    })

    describe('/api/post/updatePost tests', () => {

        it('Given valid input data  provided, should return updated document', async() => {
            const mockUpdatePostById = jest
                .spyOn(postService, 'updatePostById')
                //@ts-ignore
                .mockResolvedValueOnce(singlePostDocument)

            const { statusCode, body} = await supertest(app)
                .put('/api/post/updatePost')
                .send({...singlePostDocument, ['postId'] : singlePostDocument['_id']})

            expect(mockUpdatePostById)
                .toHaveBeenCalledTimes(1)
            expect(mockUpdatePostById.mock.calls[0][1])
                .toBe(singlePostDocument._id)
            expect(body).toEqual(singlePostDocument)
                expect(statusCode).toBe(200)

        })

        it('Given invalid input is provided, should failed at validation and return 400',async () => {
            
            const mockUpdatePostById = jest
                .spyOn(postService, 'updatePostById')

            const { statusCode} = await supertest(app)
                .put('/api/post/updatePost')
                .send(singlePostInput)

            expect(mockUpdatePostById)
                .not.toHaveBeenCalled()
            expect(statusCode)
                .toBe(400)
        })

        it('Given updatePostById service throws, should return 500',async () => {
            
            const mockUpdatePostById = jest
                .spyOn(postService, 'updatePostById')
                .mockRejectedValue('error')

            const { statusCode, text, body} = await supertest(app)
                .put('/api/post/updatePost')
                .send({...singlePostDocument, ['postId'] : singlePostDocument['_id']})

            expect(statusCode)
                .toBe(500)
            expect(text)
                .toBe('opps! something went wrong')
        })   
        
        it('Given updatePostById service fails to update, should return 400',async () => {
            
            const mockUpdatePostById = jest
                .spyOn(postService, 'updatePostById')
                .mockResolvedValue(null)

            const { statusCode, text} = await supertest(app)
                .put('/api/post/updatePost')
                .send({...singlePostDocument, ['postId'] : singlePostDocument['_id']})

            expect(statusCode)
                .toBe(400)
            expect(text)
                .toBe('update failed!')
        }) 
    })

    describe('/api/post/:postId, delete post route tests', () => {

        it('Given a valid postId is Provided, should return 200', async () => {

            const mockDeletePostById = jest
            .spyOn(postService, 'deletePostById')
            //@ts-ignore
            .mockResolvedValueOnce({
                deletedCount : 1
            })

            const {statusCode} = await supertest(app)
            .delete('/api/post/somePostId')

            expect(statusCode)
                .toBe(200)
        })

        it('Given delete was unsuccessful, should return 400', async () => {

            const mockDeletePostById = jest
            .spyOn(postService, 'deletePostById')
            //@ts-ignore
            .mockResolvedValueOnce(null)

            const {statusCode, text} = await supertest(app)
            .delete('/api/post/somePostId')

            expect(statusCode)
                .toBe(400)
            expect(text)
                .toBe('request failed!')
        })   
        
        it('Given deletePostById service throws, was unsuccessful, returns 400', async () => {

            const mockDeletePostById = jest
            .spyOn(postService, 'deletePostById')
            //@ts-ignore
            .mockRejectedValue('error')

            const {statusCode, text} = await supertest(app)
            .delete('/api/post/somePostId')

            expect(statusCode)
                .toBe(500)
        })         
    })
})