import expres from "express"
import { getSession } from "../controller/user.js"
import passportRouter from "./auth/passportAuth.js"

const router = expres.Router()
router.get('/getSession', getSession)


export default router