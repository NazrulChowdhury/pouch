import { createNewPostHandler } from "@controllers/post.controller"
import { singlePostDocument } from "@fixtures"
import * as PostService from '@services/post.service'

describe('Post.controller test suit', () => {
    describe('createNewPostHandler',() => {
        it('Given Post input and userId provided, should return "success!" string', async() => {
            const {userId, _id, ...postInput} = singlePostDocument
            const mockResource = jest
            .spyOn(PostService, 'createNewPost')
            // @ts-ignore
            .mockResolvedValue(singlePostDocument)
            const req = {
                user : userId,
                body : postInput
            }
            const res ={
                send : jest.fn()
            }
            const next = {
                next : jest.fn()
            }
            // @ts-ignore
            await createNewPostHandler(req, res, next)

            expect(res.send)
                .toBeCalled()
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith("success!")
            expect(mockResource).toHaveBeenCalled()
            expect(mockResource.mock.calls[0][0]).toEqual(postInput)
            expect(mockResource.mock.calls[0][1]).toBe(userId)
        })
    })
})