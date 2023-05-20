import  Express  from "express"
import middleware from "./middlewares/index"
import dotenv  from "dotenv"
import router from "@routes"
import passportRouter from "routes/auth/passportAuth"
dotenv.config()

const app = Express()

process.env.NODE_ENV === 'production' && app.set('trust proxy', 1)

// middleware
app.use(middleware)


app.use('/auth', passportRouter)
app.use('/api',router)
app.get('/profile', (req, res) => res.send('it is working. '))

export default app