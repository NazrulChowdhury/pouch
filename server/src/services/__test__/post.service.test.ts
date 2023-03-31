
import { createPost } from '@services/post.service'
import { PostInput } from 'types'
import { connectMongo, disconnectMongo } from '@util/mongo';
import { clearPosts } from '@services/test.service';

const postPayLoad:PostInput = {
    title:'some title text',
    description : 'some description',
    tags : ['tag1']
}

describe('Test Suite', () => { 

   beforeAll(async () => {
      await connectMongo(true)
    })

   afterAll(async () => {
      await disconnectMongo()
    })

   describe('createPost service test', () => {
        afterEach(async() => {
            await clearPosts()
        })
        it('Given a valid input, should create a new post', async() => {
            const newPost = await createPost(postPayLoad, 'user1')
            expect(newPost).toHaveProperty("_id")
            expect(newPost.title).toBe(postPayLoad.title)
            expect(newPost.description).toBe(postPayLoad.description)
            expect(newPost.tags).toEqual(postPayLoad.tags)
        })
    })

})
