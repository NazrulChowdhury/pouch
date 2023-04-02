
import { createNewPost, getAllPosts, getAllPostsByTagName } from '@services/post.service'
import { connectMongo, disconnectMongo } from '@util/mongo'
import { clearPosts, createManyPosts } from '@services/test.service'
import { manyPosts, singlePostInput } from '@fixtures'

const postPayLoad = singlePostInput
const postsArray = manyPosts

describe('Test Suite', () => { 

    beforeAll(async () => {
        await connectMongo(true)
    })

    afterAll(async () => {
      await disconnectMongo()
    })

    describe('createNewPost', () => {
        afterEach(async() => {
            await clearPosts()
        })
        it('Given a valid input, should create a new post', async() => {
            const newPost = await createNewPost(postPayLoad, 'user1')
            expect(newPost).toHaveProperty("_id")
            expect(newPost.title).toBe(postPayLoad.title)
            expect(newPost.description).toBe(postPayLoad.description)
            expect(newPost.tags).toEqual(postPayLoad.tags)
        })
    })
    describe('getAllPosts', () => {
        beforeAll(async() => {
            await createManyPosts(postsArray)
        })
        afterAll(async() => {
            await clearPosts()
        })
        it('Given a valid userId, should return all posts of that user', async() => {
            const posts = await getAllPosts('user1')
            expect(posts.length).toBe(2)
        })
        it('Given an invalid userId, should return an empty array', async()=>{
            const posts = await getAllPosts('invalidUserId')
            expect(posts.length).toBe(0)
        })
    })
    describe('getAllPostsByTagName', () => {
        beforeAll(async() => {
            await createManyPosts(postsArray)
        })
        afterAll(async() => {
            await clearPosts()
        })
        it('Given a valid tag name and userId provided, it should return all posts of that user with that tag name', async() => {
            const posts = await getAllPostsByTagName('user1','tag1')
            expect(posts.length).toBe(1)
            expect(posts[0].tags[0]).toBe('tag1')
        })
        it('given a wrong userId provided, it should return an empty array', async() => {
            const posts = await getAllPostsByTagName('wrongUserId','tag1')
            expect(posts.length).toBe(0)
        })
        it('given a wrong tagName provided, it should return an empty array', async() => {
            const posts = await getAllPostsByTagName('user1','wrongTagName')
            expect(posts.length).toBe(0)
        })
    })
})


