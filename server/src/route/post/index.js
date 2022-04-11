import express from "express"
import { createNewPost } from "../../controller/post.controller.js"

const postRouter = express.Router()
postRouter.get('/getAllPosts', (req, res) => res.send('here are your post!'))
postRouter.post('/createPost', createNewPost )

export default postRouter