import express from "express"
import navController from "../../controller/nav.controller.js"
import { createNewPost, getAllPostsByTag, getPost } from "../../controller/post.controller.js"
import validPost from "../../middleware/postValidator.js"
const postRouter = express.Router()

postRouter.get('/getAllPosts', (req, res) => res.send('here are your post!'))
postRouter.get('/getNavs', navController)
postRouter.post('/createPost',validPost ,createNewPost ) 
postRouter.get('/getPostsByTag/:tagName', getAllPostsByTag)
postRouter.get('/getPost/:postId', getPost)

export default postRouter