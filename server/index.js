import  Express  from "express"
import middleware from "./src/middleware/index.js"
import dotenv  from "dotenv"
import PassportRouter from "./src/route/auth/passportAuth.js"
import { connectMongo } from "./src/db/mongoConnect.js"
import router from "./src/route/index.js"
dotenv.config()

const app = Express()
const port = process.env.PORT || 8080

process.env.NODE_ENV === 'production' && app.set('trust proxy', 1)

// middleware
app.use(middleware)

//db
connectMongo()

app.get('/', (req, res) => res.send('working!'))
app.use('/auth', PassportRouter)
app.use('/api',router)
app.get('/profile', (req, res) => res.send('you are now logged in'))
app.listen(port,() => console.log(`listening on port ${port}`)) 

