import express from "express"
//import navController from "../../controller/nav.controller.js"
import { 
    createNewPostHandler, 
    getPostByIdHandler, 
    getPostsByTagHandler, 
    updatePostHandler,
    deletePostHandler
} from "../../controllers/post.controller"
import { postSchema } from "@schema/post.schema"
import validateResource from "@middlewares/validateResource"
import { postWithIdSchema } from "@schema/postUpdate.schema"

const postRouter = express.Router()

//postRouter.get('/getNavs', navController)
 postRouter.post('/', validateResource(postSchema), createNewPostHandler) 
 postRouter.get('/:postId', getPostByIdHandler)
 postRouter.get('/tag/:tagName', getPostsByTagHandler)
 postRouter.put('/updatePost', validateResource(postWithIdSchema), updatePostHandler)
 postRouter.delete('/:postId', deletePostHandler)

export default postRouter