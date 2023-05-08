import { connectMongo, disconnectMongo } from '@util/mongo'
import { clearUsers, createUser } from '@services/test.service'
import { createGoogleUser} from '@services/user.service'
import {googleUserInput} from "@fixtures"


describe('User Service Test Suite', () => { 

    beforeAll(async () => {
        await connectMongo(true)
    })

    afterAll(async () => {
      await disconnectMongo()
    })

    describe('createGoogleUser service tests', () => {

        it('Given all valid input, should create a user ',async() => {

            //@ts-ignore
            const user = await createGoogleUser(googleUserInput)

            expect(user)
                .toHaveProperty('_id')
            expect(user.name)
                .toBe(googleUserInput._json.name)
            await clearUsers()
        })
        it('Given a missing input has missing required properties , should throw error', async() => {

            const {name, ...inputWithNameMissing} = googleUserInput._json
            //@ts-ignore
            await expect(createGoogleUser(inputWithNameMissing)).rejects.toThrow()
            
        })
    })
})