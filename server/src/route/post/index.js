import express from "express"
import navController from "../../controller/nav.controller.js"
import { createNewPost } from "../../controller/post.controller.js"
import validPost from "../../middleware/postValidator.js"
const postRouter = express.Router()

postRouter.get('/getAllPosts', (req, res) => res.send('here are your post!'))
postRouter.get('/getNavs', navController)
postRouter.post('/createPost',validPost ,createNewPost ) 

export default postRouter