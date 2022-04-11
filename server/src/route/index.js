import express from "express"
import { getSession } from "../controller/user.controller.js"
import { errorHandler } from "../middleware/errorHandler.js"
import postRouter from "./post/index.js"

const router = express.Router()
router.get('/getSession', getSession)
router.use('/post', postRouter)

//handle errors
router.use(errorHandler)


export default router