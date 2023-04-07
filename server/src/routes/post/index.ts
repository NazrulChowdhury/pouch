import express from "express"
//import navController from "../../controller/nav.controller.js"
import { 
    createNewPostHandler, getPostByIdHandler, 
    // deletePost, 
    // getAllPostsByTag, 
    // getPost, 
    // updatePost 
} from "../../controllers/post.controller"
import { postSchema } from "../../schema/post.schema"
import validateResource from "@middlewares/validateResource"

const postRouter = express.Router()

//postRouter.get('/getNavs', navController)
 postRouter.post('/', validateResource(postSchema), createNewPostHandler) 
 postRouter.get('/:postId', getPostByIdHandler)
// postRouter.get('/tag/:tagName', getAllPostsByTag)
// postRouter.post('/updatePost', updatePost)
// postRouter.get('/deletePost/:postId', deletePost)

export default postRouter