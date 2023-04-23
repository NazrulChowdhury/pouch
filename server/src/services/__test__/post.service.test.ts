
import { createNewPost, deletePostById, getAllPosts, getAllPostsByTagName, getPostById, updatePostById } from '@services/post.service'
import { connectMongo, disconnectMongo } from '@util/mongo'
import { clearPosts, createManyPosts } from '@services/test.service'
import { manyPosts, singlePost, singlePostInput } from '@fixtures'
import mongoose from 'mongoose'
import Post from '@models/post.model'

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
            expect(newPost)
                .toHaveProperty("_id")
            expect(newPost.title)
                .toBe(postPayLoad.title)
            expect(newPost.description)
                .toBe(postPayLoad.description)
            expect(newPost.tags)
                .toEqual(postPayLoad.tags)

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
            expect(posts.length)
                .toBe(4)

        })

        it('Given an invalid userId, should return an empty array', async()=>{

            const posts = await getAllPosts('invalidUserId')
            expect(posts.length)
                .toBe(0)

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
            expect(posts.length)
                .toBe(1)
            expect(posts[0].tags[0])
                .toBe('tag1')

        })

        it('given a wrong userId provided, it should return an empty array', async() => {
           
            const posts = await getAllPostsByTagName('wrongUserId','tag1')
            expect(posts.length)
                .toBe(0)

        })

        it('given a wrong tagName provided, it should return an empty array', async() => {

            const posts = await getAllPostsByTagName('user1','wrongTagName')
            expect(posts.length)
                .toBe(0)

        })

    })

    describe('getPostById', () => {

        afterAll(async () => {
            await clearPosts()
        })

        it('Given a valid postId provided, should return that post', async() => {

            const newPostArray = await createManyPosts(postsArray)
            const firstPost = newPostArray[0]
            const targetPost = await getPostById(firstPost._id.toString())
            expect(targetPost)
                .toHaveProperty('_id')
            expect(targetPost?.userId)
                .toBe(firstPost.userId.toString())
        })

        it('Given unknown postID provided, should return null', async() => {
            
            const randomId = new mongoose.Types.ObjectId().toString()
            const targetPost = await getPostById(randomId)
            expect(targetPost)
                .toBe(null)

        })

    }) 

    describe('updatePostById', () => {
        
        afterEach(async() => {
            await clearPosts()
        })

        it('Given a valid postId is provided, it updates the post', async() => {

            const newPost = await createNewPost(postPayLoad, 'user1')
            newPost.description='updated description'
            const updatedPost = await updatePostById(newPost, newPost._id.toString(), newPost.userId)
            expect(updatedPost)
                .toHaveProperty("_id")
            expect(updatedPost?.userId)
                .toBe('user1')
            expect(updatedPost?.description)
                .toBe('updated description')

        })


        it('Given an invalid postId is provided, it returns null', async() => {
            
            const newPost = await createNewPost(postPayLoad, 'user1')
            newPost.description='updated description'
            const randomId = new mongoose.Types.ObjectId().toString()
            const updatedPost = await updatePostById( newPost, randomId, newPost.userId)
            expect(updatedPost)
                .toBe(null)

        })
        
        it('Given the post is of a different user, should return null', async() => {
            
            const newPost = await createNewPost(postPayLoad, 'user1')
            newPost.description='updated description'
            const updatedPost = await updatePostById( newPost,  newPost._id.toString(), 'randomUserId')
            expect(updatedPost)
                .toBe(null)

        })

    })

    describe('deletePostById', () => {
        
        afterAll(async() => {
            await clearPosts()
        })

        it('Given a valid post Id and userId provided, should deletes the post', async() => {

            const newPost = await new Post(singlePost).save()
            await deletePostById(newPost._id.toString(), newPost.userId)
            const allPosts = await Post.find().lean()
            expect(allPosts.length)
                .toBe(0)

        })

        it('Given the post is of a different user, should not delete post', async() => {
            
            const newPost = await new Post(singlePost).save()
            const result = await deletePostById(newPost._id.toString(), 'randomUserId')
            expect(result.deletedCount)
                .toBe(0)

        })
    })
})


