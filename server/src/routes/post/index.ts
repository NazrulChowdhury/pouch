import express from "express"
//import navController from "../../controller/nav.controller.js"
import { 
    createNewPostHandler, 
    // deletePost, 
    // getAllPostsByTag, 
    // getPost, 
    // updatePost 
} from "../../controllers/post.controller"
import { postSchema } from "../../schema/post.schema"
//import validateResource from "../../middlewares/validateResource"

const postRouter = express.Router()

//postRouter.get('/getNavs', navController)
 postRouter.post('/',createNewPostHandler ) //validateResource(postSchema)
// postRouter.get('/tag/:tagName', getAllPostsByTag)
// postRouter.get('/getPost/:postId', getPost)
// postRouter.post('/updatePost', updatePost)
// postRouter.get('/deletePost/:postId', deletePost)

export default postRouter