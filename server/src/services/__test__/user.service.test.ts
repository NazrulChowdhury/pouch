import { connectMongo, disconnectMongo } from '@util/mongo'
import { clearUsers } from '@services/test.service'
import { createGoogleUser, createGithubUser, updateUserPicture, getUser, getUserById} from '@services/user.service'
import {googleUserInput, gitHubUserInput} from "@fixtures"
import { UserDocument } from '@types'
import mongoose from 'mongoose'


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
            expect(user.platform.googleID)
                .toBe(googleUserInput._json.sub)
            await clearUsers()
        })

        it('Given a missing input has missing required properties , should throw error', async() => {
            const {name, ...inputWithNameMissing} = googleUserInput._json
            //@ts-ignore
            await expect(createGoogleUser(inputWithNameMissing)).rejects.toThrow()        
        })
    })

    describe('createGithubUser service tests', () => {

        it('Given all valid input, should create a user ',async() => {
            //@ts-ignore
            const user = await createGithubUser(gitHubUserInput)

            expect(user)
                .toHaveProperty('_id')
            expect(user.name)
                .toBe(gitHubUserInput.name)
            expect(user.platform.githubID)
                .toBe(gitHubUserInput.id)
            // await clearUsers()
        })

        it('Given a missing input has missing required properties , should throw error', async() => {
            const {name, ...inputWithNameMissing} = gitHubUserInput
            //@ts-ignore
            await expect(createGoogleUser(inputWithNameMissing)).rejects.toThrow()        
        })
    })

    describe('updateUserPicture service tests', () => {

        let user = {} as UserDocument;

        beforeAll(async() => {
            //@ts-ignore
            user =  await createGoogleUser(googleUserInput) // picture : 'http:pictureLink',
        })

        afterAll(async() => {
            await clearUsers()
        })

        test('Given a valid id and imageUrl, should update the users picture url', async() => { user

            const response = await updateUserPicture(user._id , 'UpdatedImageUrl') 
            expect(response.modifiedCount)
               .toBe(1)

        })

        test('Given invalid userId, should not update the users picture url', async () => {
            //@ts-ignore
            const response = await updateUserPicture(mongoose.Types.ObjectId() , 'UpdatedImageUrl') 
            expect(response.modifiedCount)
                .toBe(0)
        })

        test('Given imageUrl input is missing, should throw error', async () => {
            //@ts-ignore
            await expect(updateUserPicture(user._id)).rejects.toThrow()
        })

    })

    describe('getUser service tests', () => {

        let newUser = {} as  UserDocument 

        beforeAll(async() => {
            //@ts-ignore
            newUser = await createGoogleUser(googleUserInput)
        })

        afterAll(async() => {
            await clearUsers()
        })
        
        it('Given a valid provider and ID are provided, should return the user', async() => {
            const user = await getUser('google', newUser.platform.googleID!)
            expect(user)
                .toBeDefined()
            expect(user?._id)
                .toEqual(newUser._id)
        })

        it('Given an invalid ID is provided, should return null', async() => {
            const user = await getUser('google', 'random123')
            expect(user)
                .toBeNull()
        })

    })

    describe('getUserById service tests', () => {

        let newUser = {} as  UserDocument 

        beforeAll(async () => {
            //@ts-ignore
            newUser = await createGoogleUser(googleUserInput)
        })
      
        afterAll(async () => {
            await clearUsers()
        })
      
        it('Given a valid ID is provided, should return the user', async () => {
          const user = await getUserById(newUser._id)         
          expect(user)
            .toBeDefined()
          expect(user?.name)
            .toBe(googleUserInput._json.name)
        })
      
        it('Given an invalid ID is provided, should return null', async () => {
            //@ts-ignore
          const user = await getUserById(mongoose.Types.ObjectId().toString())
          expect(user)
            .toBeNull()
        })
      
      })
      
})