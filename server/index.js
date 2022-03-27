import  Express  from "express"
import middleware from "./src/middleware/index.js"
import dotenv  from "dotenv"
import PassportRouter from "./src/route/auth/passportAuth.js"
import './src/auth/passport.config.js'
dotenv.config()

const app = Express()
const port = process.env.PORT || 8080

process.env.NODE_ENV === 'production' && app.set('trust proxy', 1)

app.use(middleware)

app.get('/', (req, res) => res.send('working!'))
app.get('/profile', (req, res) => res.send('you are now logged in'))
app.use('/auth', PassportRouter)
app.listen(port,() => console.log(`listening on port ${port}`)) 


