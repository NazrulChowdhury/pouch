import { createNewPostHandler, deletePost, getPostByIdHandler, getPostsByTagHandler, updatePostHandler } from "@controllers/post.controller"
import { singlePost, singlePostDocument, singlePostInput } from "@fixtures"
import * as PostService from '@services/post.service'

describe('Post.controller test suit', () => {

    const res ={ send : jest.fn() }
    const next = jest.fn() 

    describe('createNewPostHandler',() => {

        const {userId, _id, ...postInput} = singlePostDocument
        const req = {
            user : userId,
            body : postInput
        }

        it('Given Post input and userId provided, should return "success!" string', async() => {

            const mockResource = jest
                .spyOn(PostService, 'createNewPost')
                // @ts-ignore
                .mockResolvedValue(singlePostDocument)
            // @ts-ignore
            await createNewPostHandler(req, res, next)

            expect(res.send)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith("success!")
            expect(mockResource)
                .toHaveBeenCalled()
            expect(mockResource.mock.calls[0][0])
                .toEqual(postInput)
            expect(mockResource.mock.calls[0][1])
                .toBe(userId)

        }),

        it('Given createNewPost service throws, the next function is called with error', async()=>{

            const mockResource = jest
                .spyOn(PostService, 'createNewPost')
                // @ts-ignore
                .mockRejectedValue('error has ocurred!')
            // @ts-ignore
            await createNewPostHandler(req, res, next)
            expect(next)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith('error has ocurred!')

        })
    })

    describe('getPostsByTagHandler', () => {

        const req = {
            user: 'user1', 
            params : {
                tagName: 'someTag'
            }
        }

        it('Given a userName and tag name provided as input, should return an array', async() => {

            const mockGetAllPostsByTagNameService = jest
                .spyOn(PostService,'getAllPostsByTagName')
                .mockResolvedValue([])
            // @ts-ignore
            await getPostsByTagHandler(req, res, next)

            expect(mockGetAllPostsByTagNameService) 
                .toHaveBeenCalledTimes(1)
            expect(mockGetAllPostsByTagNameService.mock.calls[0][0]) 
                .toBe('user1')
            expect(mockGetAllPostsByTagNameService.mock.calls[0][1]) 
                .toBe('someTag')
            expect(res.send)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith([])
            
        }) 


        it('Given getAllPostsByTagName trows, the next function is called with error', async() => {
            
            const mockGetAllPostsByTagNameService = jest
                .spyOn(PostService,'getAllPostsByTagName')
                .mockRejectedValue('error')
            // @ts-ignore
            await getPostsByTagHandler(req, res, next)

            expect(next)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith('error')
            
        }) 
    })

    describe('getPostByIdHandler', () => {

        const req = {
            params : {
                postId : 'someId'
            }
        }

        it('Given a PostId is provided as input, returns an object', async() => {

            const mockGetPostByIdService = jest
                .spyOn(PostService,'getPostById')
                //@ts-ignore
                .mockResolvedValue({})
            //@ts-ignore
            await getPostByIdHandler(req, res, next)

            expect(mockGetPostByIdService)
                .toHaveBeenCalledTimes(1)
            expect(mockGetPostByIdService.mock.calls[0][0])
                .toEqual('someId')
            expect(res.send).
                toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith({})

        })

        it('Given getPostById service throws, the next function is called with error', async() => {
            
            const mockGetPostByIdService = jest
                .spyOn(PostService,'getPostById')
                .mockRejectedValue('error')
            //@ts-ignore
            await getPostByIdHandler(req, res, next)

            expect(next)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith('error')
        })
    })

    describe('updatePostHandler', () => {

        const req = {
            user : singlePost.userId,
            body : {
                ...singlePostInput,
                postId : 'someId'
            }
        }

        it('Given Post input and postId is provided, should return an object', async() => {
            const mockUpdatePostById = jest
                .spyOn(PostService, 'updatePostById')
                //@ts-ignore
                .mockResolvedValue(singlePostDocument)
            //@ts-ignore
            await updatePostHandler(req, res, next)
            expect(mockUpdatePostById)
                .toHaveBeenCalledTimes(1)
            expect(mockUpdatePostById.mock.calls[0][0])
                .toEqual(singlePost)
            expect(mockUpdatePostById.mock.calls[0][1])
                .toBe('someId')
            expect(res.send)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenLastCalledWith(singlePostDocument)
        })

        it('Given updatePostById throws, should call the next function', async() => {
            const mockUpdatePostById = jest
                .spyOn(PostService, 'updatePostById')
                .mockRejectedValue('error')
            //@ts-ignore
            await updatePostHandler(req, res, next)
            expect(next)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith('error')
            
        })
    }) 

    describe('deletePost', () => {

        const req = {
            user : singlePost.userId,
            params : {
                postId : 'somePostId'
            }
        }

        it('Given a valid postId is provided, should return a string "post deleted!"', async() => {

            const mockDeletePostById = jest
            .spyOn(PostService, 'deletePostById')
            //@ts-ignore
            .mockResolvedValueOnce({
                deletedCount : 1
            })
            //@ts-ignore
            await deletePost(req, res, next)
            expect(mockDeletePostById)
                .toHaveBeenCalledTimes(1)
            expect(mockDeletePostById.mock.calls[0][0])
                .toBe('somePostId')
            expect(mockDeletePostById.mock.calls[0][1])
                .toBe(singlePost.userId)
            expect(res.send)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith('post deleted!')

        })

        it('Given deletePostById service throws, should call the next with error', async() => {

            const mockDeletePostById = jest
                .spyOn(PostService, 'deletePostById')
                .mockRejectedValueOnce('error')
            //@ts-ignore
            await deletePost(req, res, next)
            expect(next)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith('error')

        })
    })
})