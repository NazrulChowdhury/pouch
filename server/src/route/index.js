import express from "express"
import { getSession } from "../controller/user.js"
import { errorHandler } from "../middleware/errorHandler.js"

const router = express.Router()
router.get('/getSession', getSession)

//handle errors
router.use(errorHandler)


export default router