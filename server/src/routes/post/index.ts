import express from "express"
import { 
    createNewPostHandler, 
    getPostByIdHandler, 
    getPostsByTagHandler, 
    updatePostHandler,
    deletePostHandler
} from "@controllers/post.controller"
import { postSchema } from "@schema/post.schema"
import validateResource from "@middlewares/validateResource"
import { postDocumentSchema } from "@schema/postUpdate.schema"
import navHandler from "@controllers/nav.controller"

const postRouter = express.Router()

 postRouter.get('/getNavs', navHandler) // array of tags to be used as nav items. 
 postRouter.post('/', validateResource(postSchema), createNewPostHandler) 
 postRouter.get('/:postId', getPostByIdHandler)
 postRouter.get('/tag/:tagName', getPostsByTagHandler)
 postRouter.put('/updatePost', validateResource(postDocumentSchema), updatePostHandler)
 postRouter.delete('/:postId', deletePostHandler)

export default postRouter