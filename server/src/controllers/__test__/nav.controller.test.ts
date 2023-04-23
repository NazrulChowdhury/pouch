import navHandler from "@controllers/nav.controller"
import { getAllPosts } from "@services/post.service"
import * as  postService from "@services/post.service"

describe('nav.controller.ts test suit', () => {

    const req = {
        user : 'someUserId'
    }
    const res = {
        send : jest.fn()
    }
    const next = jest.fn()

    it('Given navHandler is called, should call getAllPosts service with "someUserId" argument', async() => {

        const mockGetAllPosts = jest
        .spyOn(postService, 'getAllPosts')
        .mockResolvedValue([])
        //@ts-ignore
        await navHandler(req, res, next)


        expect(mockGetAllPosts)
        .toHaveBeenCalledTimes(1)
        expect(mockGetAllPosts.mock.calls[0][0])
        .toBe('someUserId')
    })

    it('Given navHandler is called , should call res.send with an array', async() => {

        const mockGetAllPosts = jest
        .spyOn(postService, 'getAllPosts')
        .mockResolvedValue([])
        //@ts-ignore
         await navHandler(req, res, next)


        expect(res.send)
        .toHaveBeenCalledTimes(1)
        .toHaveBeenCalledWith([])
    })

    it('Given getAllPosts service throws, should call the next function', async() => {
        const mockGetAllPosts = jest
            .spyOn(postService, 'getAllPosts')
            .mockRejectedValue('error')

        //@ts-ignore
        await navHandler(req, res, next)

        expect(next)
            .toHaveBeenCalledTimes(1)
            .toHaveBeenCalledWith('error')
    })

})