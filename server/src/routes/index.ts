import express from "express"
import postRouter from "./post/index"
import { errorHandler } from "@middlewares/errorHandler"
import { getSession } from "@controllers/user.controller"
import authenticate from "@middlewares/authenticate"

const router = express.Router()
router.get('/getSession', getSession)
router.use(authenticate)
router.use('/post', postRouter)

//handle errors
router.use(errorHandler)


export default router