import  Express  from "express"
import middleware from "./middlewares/index"
import dotenv  from "dotenv"
//import PassportRouter from "./route/auth/passportAuth"
// import router from "./route/index.js"
dotenv.config()

const app = Express()


process.env.NODE_ENV === 'production' && app.set('trust proxy', 1)

// middleware
app.use(middleware)

app.get('/', (req, res) => res.send('Hello World!'))
//app.use('/auth', PassportRouter)
// app.use('/api',router)
// app.get('/profile', (req, res) => res.send('you are now logged in'))

export default app