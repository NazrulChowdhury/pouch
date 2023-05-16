import { googleUserDocument } from "@fixtures"
import * as userService from '@services/user.service'
import { getSession } from "@controllers/user.controller"


describe('user controller test suit', () => {

    describe('getSession controller tests',() => {
        const res ={ send : jest.fn() }
        const next = jest.fn() 
        const req = {
            user : googleUserDocument._id
        }
    
        test('Given user is logged on, should return users name, email and picture', async() => {
            const getUserByIdMock = jest
                .spyOn(userService, 'getUserById')
                .mockResolvedValueOnce(googleUserDocument)
            //@ts-ignore
            await getSession(req, res, next)
            expect(res.send)
                .toHaveBeenCalledTimes(1)
            expect(res.send)
                .toHaveBeenCalledWith({
                    name : googleUserDocument.name,
                    picture : googleUserDocument.picture, 
                    email : googleUserDocument.email
                })
        })

        test('Given user is not found, should call next', async() => {
            const getUserByIdMock = jest
                .spyOn(userService, 'getUserById')
                .mockRejectedValueOnce(null)
            //@ts-ignore
            await getSession(req, res, next)
            expect(res.send)
                .not.toHaveBeenCalled()
            expect(next)
                .toBeCalledTimes(1)
        })

        test('Given user is not logged on, should return null', async() => {
            const req = {
                user : null
            }
            const getUserByIdMock = jest
                .spyOn(userService, 'getUserById')
            //@ts-ignore    
            await getSession(req, res, next)
            expect(getUserByIdMock)
                .not.toHaveBeenCalled()
            expect(res.send)
                .toHaveBeenCalledTimes(1)
                .toHaveBeenCalledWith(null)
        })
    })
})