import express from "express"
import navController from "../../controller/nav.controller.js"
import validPost from "../../middleware/postValidator.js"
import { 
    createNewPost, 
    deletePost, 
    getAllPostsByTag, 
    getPost, 
    updatePost 
} from "../../controller/post.controller.js"

const postRouter = express.Router()

postRouter.get('/getAllPosts', (req, res) => res.send('here are your post!'))
postRouter.get('/getNavs', navController)
postRouter.post('/createPost',validPost ,createNewPost ) 
postRouter.get('/getPostsByTag/:tagName', getAllPostsByTag)
postRouter.get('/getPost/:postId', getPost)
postRouter.post('/updatePost', updatePost)
postRouter.get('/deletePost/:postId', deletePost)

export default postRouter